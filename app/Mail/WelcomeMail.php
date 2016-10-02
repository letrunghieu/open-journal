<?php

namespace OpenJournal\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Queue\ShouldQueue;

class WelcomeMail extends Mailable
{
    use Queueable, SerializesModels;

    public $userEmail;

    public $userFullName;

    /**
     * Create a new message instance.
     *
     * @param $userEmail
     * @param $userFullName
     */
    public function __construct($userEmail, $userFullName)
    {
        $this->userEmail = $userEmail;
        $this->userFullName = $userFullName;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        // TODO: localize the email subject
        return $this->subject('Welcome to Open Inventory')
            ->view('emails.welcome');
    }
}
