<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Dusun extends Model
{
    protected $table = 'dusuns';

    public function penduduk()
    {
        return $this->hasMany(Penduduk::class, 'id_dusun', 'id');
    }
}