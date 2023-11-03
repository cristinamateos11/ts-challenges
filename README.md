# ts-challenges

## Instalación

Asegúrate de tener Node.js y npm instalados en tu sistema antes de continuar:

- [Node.js](https://nodejs.org/en/download)
- [npm](https://www.npmjs.com/)

## Verificacion

```
node -v
npm install -g typescript
tsc -v
```

## Generar archivo tsconfig.json

tsc --init
creamos carpeta build, descomentamos outDir estableciendo el parametro en ./build
y opcion de destino a: ES2015
tsc

Registro en la consola
node ./build/nombre_archivo.js

## Errores

Al ejecutar el comando `tsc --init` puede saltarnos un error. Para ello, abrimos la windows powershell como administrador y ejecutamos los siguientes comandos:

```
Get-ExecutionPolicy -List
Set-ExecutionPolicy RemotedSigned -Scope CurrentUser
```

Ahora el comando init deberia ejecutarse sin errrores.
