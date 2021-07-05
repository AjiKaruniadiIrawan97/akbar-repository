<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

use Faker\Factory as Faker;

class PendudukSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = Faker::create('id_ID');
        for($i = 1; $i <= 10; $i++){
    		DB::table('penduduks')->insert([
    			'nama' => $faker->name,
                'id_dusun' => 5,
                'ttl' => $faker->state." ".$faker->date($format = 'Y-m-d', $max = 'now'),
                'jenis_kelamin' => 'L',
                'status' => 'Positif'
    		]);
    	}
    }
}