echo '#!/bin/sh' > set_permissions.sh
echo 'chmod +x ./node_modules/.bin/jest' >> set_permissions.sh
chmod +x set_permissions.sh
