# ts-challenges

Instalacion
Node.js
npm


Verificacion
node -v
npm install -g typescript (instalar de manera global)
tsc -v

Generar archivo tsconfig.json
tsc --init
creamos carpeta build, descomentamos outDir estableciendo el parametro en ./build
tsc

Registro en la consola
node ./build/nombre_archivo.js

ERRORES
windows powershell como admin
Get-ExecutionPolicy -List
Set-ExecutionPolicy RemotedSigned -Scope CurrentUser
(ahora el comando init deberia ejecutarse sin errrores)