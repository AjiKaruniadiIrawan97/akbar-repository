<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Dusun;

class DusunController extends Controller
{
    public function index()
    {
        $dusun = Dusun::get();
        return $dusun;
    }
}