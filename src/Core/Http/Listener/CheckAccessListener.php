<?php

namespace App\Core\Http\Listener;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\EventDispatcher\Attribute\AsEventListener;
use Symfony\Component\HttpKernel\Event\RequestEvent;

#[AsEventListener('kernel.request', method: 'onKernelRequest')]
class CheckAccessListener extends AbstractController
{
    public function onKernelRequest(RequestEvent $event): void
    {
        $request = $event->getRequest();
        $route = $request->attributes->get('_route');

        if (str_starts_with($route, 'app_admin_')) {
            $user = $this->getUser();
            if ($user === null) {
                $this->denyAccessUnlessGranted([
                    'ROLE_ADMIN',
                    'ROLE_SUPER_ADMIN',
                ]);
            }
        }
    }
}