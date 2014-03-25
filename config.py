import os

CURRENT_PATH=os.path.dirname(os.path.realpath(__file__))
SCRIPTS_PATH=CURRENT_PATH+'/scripts'

scripts = [
    ['%s/single_screenshot.js' % (SCRIPTS_PATH), 'http://learnpython.org/', '%s/screenie.png' % CURRENT_PATH],
    ['%s/multiple_screenshots.js' % (SCRIPTS_PATH), 'http://learnpython.org/']
]
