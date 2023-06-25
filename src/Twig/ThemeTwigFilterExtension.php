<?php

declare(strict_types=1);

namespace App\Twig;

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\RequestStack;
use Twig\Extension\AbstractExtension;
use Twig\TwigFilter;
use Twig\TwigFunction;

class ThemeTwigFilterExtension extends AbstractExtension
{
    protected ?Request $request;

    protected ?string $activeRoute;

    public function __construct(RequestStack $requestStack)
    {
        $this->request = $requestStack->getCurrentRequest();
    }

    /**
     * @return array<TwigFunction>
     */
    public function getFunctions(): array
    {
        return [new TwigFunction('is_active', [$this, 'isActiveFunction'])];
    }

    public function getFilters(): array
    {
        return [new TwigFilter('is_active', [$this, 'isActiveFilter'])];
    }

    /**
     * Check the active menu item by route name partial
     *     Example: {{ is_active('routename', true) }}.
     *
     * @param string $routeName The route name
     * @param bool   $lazyCheck Defaults to false; only needed for complex routes
     *
     * @return string Empty string or "active current" string
     */
    public function isActiveFunction(string $routeName, bool $lazyCheck = false): string
    {
        $this->activeRoute = $this->request->attributes->get('_route');

        $isCurrent = $this->compareFullRoute($routeName);

        if ($lazyCheck) {
            $isActive = $this->compareRouteLazy($routeName);
        } else {
            $isActive = $this->comparePartialRoute($routeName);
        }

        return $this->buildClassAttr($isCurrent, $isActive);
    }

    /**
     * Check the active menu item by route name partial
     *     Example: {{ 'routename'|is_active }}.
     *
     * @param string $routeName The route name
     *
     * @return string Empty string or "active current" string
     */
    public function isActiveFilter(string $routeName): string
    {
        $this->activeRoute = $this->request->attributes->get('_route');

        $isCurrent = $this->compareFullRoute($routeName);
        $isActive = $this->comparePartialRoute($routeName);

        return $this->buildClassAttr($isCurrent, $isActive);
    }

    /**
     * Create string of class attributes.
     *
     * @return string The string of class attributes
     */
    protected function buildClassAttr(bool $isCurrent, bool $isActive): string
    {
        $result = '';

        if ($isCurrent === true) {
            $result = 'current active';
        } elseif ($isActive === true) {
            $result = 'active';
        }

        return $result;
    }

    /***
     * Check route name against the current / active route
     * e.g. given route name 'production.supplier.index' against
     * activeRoute 'production.supplier.index'
     *
     * @param string $routeName
     *
     * @return bool
     */
    private function compareFullRoute(string $routeName): bool
    {
        return $routeName === $this->activeRoute;
    }

    /***
     * Check route name against a partial of the current / active route
     * e.g. given route name 'production' against substring of
     * current / active route 'production.supplier.index'; compared will only
     * the length of the given route name, in this case the first 10 chars ('production')
     *
     * @param string $routeName
     *
     * @return bool
     */
    private function comparePartialRoute(string $routeName): bool
    {
        $comparisonLength = strlen($routeName);
        $routeCheck = substr_compare(
            $this->activeRoute,
            $routeName,
            0,
            length: $comparisonLength // @phpstan-ignore-line
        );

        return $routeCheck === 0;
    }

    /***
     * Check route name against a partial of the current / active route
     * cutting last portion (the last dot and all behind)
     * e.g. given route name 'production.supplier.index' against
     * the current / active route 'production.supplier.new';
     * compared will only the partial 'production.supplier'
     *
     * @param string $routeName
     *
     * @return bool
     */
    private function compareRouteLazy(string $routeName): bool
    {
        $pattern = '/(.*)\./';
        preg_match($pattern, $routeName, $matches);
        if (count($matches) > 0) {
            $replacedRouteName = $matches[0];

            $comparisonLength = strlen($replacedRouteName);
            $routeCheck = substr_compare(
                $this->activeRoute,
                $replacedRouteName,
                0,
                length: $comparisonLength // @phpstan-ignore-line
            );

            return $routeCheck === 0;
        }

        return false;
    }
}
