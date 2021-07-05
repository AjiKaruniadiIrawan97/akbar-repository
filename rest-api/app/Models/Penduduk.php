<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Penduduk extends Model
{
    protected $table = 'penduduks';

    public function dusun()
    {
        return $this->belongsTo(Dusun::class, 'id_dusun', 'id');
    }
}