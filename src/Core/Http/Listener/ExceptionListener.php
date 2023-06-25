<?php

declare(strict_types=1);

namespace App\Core\Http\Listener;

use Symfony\Component\DependencyInjection\Attribute\When;
use Symfony\Component\EventDispatcher\Attribute\AsEventListener;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpKernel\Event\ExceptionEvent;
use Symfony\Component\HttpKernel\Exception\HttpException;

use function Symfony\Component\String\u;

use Twig\Environment;

#[AsEventListener('kernel.exception', method: 'onKernelException')]
#[When('prod')]
class ExceptionListener
{
    public function __construct(
        private Environment $twig
    ) {
    }

    public function onKernelException(ExceptionEvent $event): void
    {
        $exception = $event->getThrowable();
        $statusCode = 500;
        if ($exception instanceof HttpException) {
            $statusCode = $exception->getStatusCode();
        }

        $content = $this->twig->render('theme/errors/error.html.twig', [
            'title' => "Error {$statusCode}",
            'description' => 'Error description',
            'redirect_path' => 'app_front_home',
            'redirect_btn_trad' => 'Go to home',
            'preferred_locale' => u($event->getRequest()->getPreferredLanguage())
                ->before('_')
                ->toString(),
        ]);

        $event->setResponse(new Response($content, $statusCode));
    }
}
