<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\Penduduk;
use App\Models\Dusun;

class PendudukController extends Controller
{
    public function index()
    {
        $penduduk = Penduduk::with('dusun')->orderBy('id_dusun')->get();
        return $penduduk;
    }

    public function totalByStatus()
    {
        $penduduk = DB::table('penduduks')
                 ->select('status', DB::raw('count(status) as total'))
                 ->groupBy('status')
                 ->get();
        return $penduduk;
    }

    public function totalByDusun($id)
    {
        $penduduk = Penduduk::select('status', DB::raw('count(status) as total'))
                    ->where('id_dusun', $id)
                    ->groupBy('status')
                    ->get();
        return $penduduk;
    }
}
