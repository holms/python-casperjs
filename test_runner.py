from __future__ import print_function
from runner import construct_command, command_runner
import sys, os, json
import config

class casperjs(object):

    def __init__(self, **kwargs):
        self.run()
        pass

    def run(self):
        """Run CasperJS"""

        try:
            for script in config.scripts:
                self.execute_command(script)
        except Exception as err:
            print(('Exception: %s' % err))
            sys.exit(1)

        pass

    def execute_command(self, cmd):
        """Execute command.

        :cmd: arguments dictinoary
        :returns: (int)

        """
        output = command_runner(cmd)
        for r in output:
            print(json.loads(json.dumps(r))['message'],end='')

        return 0

if __name__ == '__main__':
    casperjs = casperjs()
