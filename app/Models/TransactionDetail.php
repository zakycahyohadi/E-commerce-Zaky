<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class TransactionDetail extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'code',
        'ticket_id',
        'transaction_id',
        'is_reedemed',
    ];

    // relation to ticket
    public function ticket()
    {
        return $this->belongsTo(Ticket::class);
    }

    // relation to transaction
    public function transaction()
    {
        return $this->belongsTo(Transaction::class);
    }
}