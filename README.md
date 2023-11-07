<div align="center">
<h1 align="center"> ts-challenges </h1> 
</div>

## 🔧 Instalación

Asegúrate de tener Node.js y npm instalados en tu sistema antes de continuar:

- [Node.js](https://nodejs.org/en/download)
- [npm](https://www.npmjs.com/)

## 🔍 Verificación

```
node -v
npm install -g typescript
tsc -v
```

## ⚙️ Generar archivo tsconfig.json

Creamos la carpeta `build`. Depsués ejecutamos el comando:

```
tsc --init
```

Eso generará el archivo `tsconfig.json`. A continuación, descomentamos `outDir` estableciendo el parametro en ./build y opción de destino a: ES2015.

Ejecutamos el siguiente comando:

```
tsc
```

## 📜 Registro en la consola

Para poder ver los console.log y los resultados de nuestros archivos, ejecutamos el siguiente comando:

```
node ./build/nombre_archivo.js
```

## 🚫 Errores

Al ejecutar el comando `tsc --init` puede saltarnos un error. Para ello, abrimos la windows powershell como administrador y ejecutamos los siguientes comandos:

```
Get-ExecutionPolicy -List
Set-ExecutionPolicy RemotedSigned -Scope CurrentUser
```

Ahora el comando init deberia ejecutarse sin errrores.

## 🔌 Plugins

1. **ESLint**: Ayuda a mantener un código limpio y consistente mediante reglas de linting.

2. **Prettier - Code Formatter**: Automatiza la formateo de tu código para mantenerlo limpio y legible.

3. **Git Graph** (Opcional): Facilita la visualización de tu historial de Git y las ramas de tu proyecto.

4. **Pretty TypeScript Errors** (Opcional): Hace que los mensajes de error de TypeScript sean más legibles y fáciles de entender.

5. **vscode-icons** (Opcional): Agrega iconos coloridos a los archivos y carpetas.

## ✨ Prettier

`File -> Preferences -> Settings: editor.defaultFormatter = Prettier - Code Formatter`

Activar función: **editor.formatOnSave** y **editor.formatOnType**
