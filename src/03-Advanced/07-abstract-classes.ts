abstract class Command {
    abstract commandLine():string

    execute(){
        console.log(`Executing: ${this.commandLine()}`)
    }
}

class GitResetCommit extends Command{
    commandLine(): string {
        return "git reset --hard"
    }
}

new GitResetCommit().execute()