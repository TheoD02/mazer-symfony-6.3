<?php

namespace App\Core\Http\Listener;

use JetBrains\PhpStorm\NoReturn;
use Symfony\Component\DependencyInjection\Attribute\Autowire;
use Symfony\Component\EventDispatcher\Attribute\AsEventListener;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Session\Flash\FlashBagInterface;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
use Symfony\Component\HttpKernel\Event\KernelEvent;
use Symfony\Component\HttpKernel\Event\RequestEvent;
use Symfony\Component\String\UnicodeString;
use Symfony\Component\Translation\LocaleSwitcher;

use function Symfony\Component\String\u;

#[AsEventListener('kernel.request', method: 'onKernelRequest', priority: 0)]
readonly class DefaultLocaleRedirectListener
{
    public function __construct(
        #[Autowire('%app.supported_locales%')] private string $supportedLocales,
        private LocaleSwitcher $localeSwitcher,
    ) {
    }

    #[NoReturn] public function onKernelRequest(RequestEvent $event): void
    {
        $request = $event->getRequest();
        $supportedLocales = array_map(
            fn(UnicodeString $locale) => $locale->toString(),
            u($this->supportedLocales)->split('|')
        );

        $preferredLocale = $request->getPreferredLanguage($supportedLocales);
        if ($request->getLocale() === null) {
            $this->localeSwitcher->setLocale($preferredLocale);
            $this->redirect($event, $preferredLocale);
        }

        $uri = $request->getRequestUri();
        $uri = u($uri)->trimStart('/')->before('/')->toString();

        if (!in_array($uri, $supportedLocales, true)) {
            $request->getSession()->getFlashBag()->add('warning', 'flash.locale.not_supported');
            $this->redirect($event, $preferredLocale);
        }
    }

    private function redirect(RequestEvent $event, string $locale): void
    {
        $request = $event->getRequest();
        $event->setResponse(
            new RedirectResponse(
                "{$request->getSchemeAndHttpHost()}/{$locale}",
                302
            )
        );
    }
}