/*
  Optional comment string to describe the command.
*/
module.exports = (self) => {
  self.registerCommand('mycommand', function (msg, args) {
    // Do something with msg or args

    this.send(msg, 'This is some text', deleteDelay) // Send a message

    this.embed(msg, { // Send an embed
      title: 'Embed title',
      description: 'Embed description',
      color: 4627433
    }, deleteDelay)

    this.findMember(msg, args[0]) // Find a guild member
  }, {
    noPms: false, // Will only work on guilds (No PM's)
    aliases: ['cmd', 'mycmd'], // Will make "cmd" and "mycmd" be an alias of "mycommand"
    perms: [ // Will only do the command if you have the "Manage channels" AND the "Manage Nicknames" permissions
    ],
    deleteAfter: false // Delete the command message after the command was done or not
  })
}