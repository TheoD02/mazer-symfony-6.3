<?php

namespace App\Core\Http\Listener;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\DependencyInjection\Attribute\When;
use Symfony\Component\EventDispatcher\Attribute\AsEventListener;
use Symfony\Component\HttpKernel\Event\ExceptionEvent;
use Symfony\Component\HttpKernel\Exception\HttpException;

#[AsEventListener('kernel.exception', method: 'onKernelException')]
class ExceptionListener extends AbstractController
{
    public function onKernelException(ExceptionEvent $event): void
    {
        $exception = $event->getThrowable();
        $statusCode = 500;
        if ($exception instanceof HttpException) {
            $statusCode = $exception->getStatusCode();
        }

        $event->setResponse(
            $this->render('theme/errors/error.html.twig', [
                'title' => "Error {$statusCode}",
                'description' => 'Error description',
                'redirect_path' => 'app_front_home',
                'redirect_btn_trad' => 'Go to home',
            ])
        );
    }
}