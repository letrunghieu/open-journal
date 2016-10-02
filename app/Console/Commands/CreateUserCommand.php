<?php

namespace OpenJournal\Console\Commands;

use Illuminate\Console\Command;
use OpenJournal\Mail\WelcomeMail;
use OpenJournal\Models\User;

class CreateUserCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'create:user';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Create or update the default user';

    /**
     * Create a new command instance.
     *
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        $this->output->writeln("Create/update the only user of the system");

        $attributes = [
            'name'     => '',
            'email'    => '',
            'password' => '',
        ];

        $attributes['name'] = $this->ask("Enter your name:");
        $attributes['email'] = $this->ask("Enter your email:");
        $password = $this->secret("Enter your password:");
        $password2 = $this->secret("Enter your password again:");
        if ($password != $password2) {
            $this->error("Two passwords are not matched");

            return false;
        }
        $attributes['password'] = $password;

        $user = User::find(1);
        if (!$user) {
            $user = User::create($attributes);
        } else {
            $user->name = $attributes['name'];
            $user->email = $attributes['email'];
            $user->password = bcrypt($attributes['password']);
            $user->save();
        }

        \Mail::to($attributes['email'])
            ->send(new WelcomeMail($attributes['email'], $attributes['name']));

        $this->output->success("User is created/updated successfully");

        return true;
    }
}
