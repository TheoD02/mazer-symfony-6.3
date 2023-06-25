<?php

declare(strict_types=1);

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class EntryController extends AbstractController
{
    #[Route('')]
    public function index(Request $request): Response
    {
        return $this->redirectToRoute('app_front_home', [
            '_locale' => $request->getLocale(),
        ]);
    }
}
