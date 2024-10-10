# MDocsDep

MDocsDep es un paquete de NPM desarrollado con Node.js y TypeScript, diseñado para gestionar y consultar información en una base de datos MSSQL, generando un diccionario de datos como respuesta. Este paquete proporciona detalles como nombres de tablas, columnas, tipos de datos y propiedades clave, facilitando la documentación y comprensión de los esquemas de bases de datos para su análisis y mantenimiento.

## Características

- Gestión y consulta de información en bases de datos MSSQL.
- Generación de diccionarios de datos.
- Detalles de nombres de tablas, columnas, tipos de datos y propiedades clave.
- Facilita la documentación y comprensión de esquemas de bases de datos.

## Instalación

```bash
npm install mdocsdep
```

## Uso

```typescript
import { MDocsDep } from "@cristiandev/mdocsdep";

// Ejemplo de uso
const mdocs = new MDocsDep();
const dictionary = mdocs.generateDictionary({
  typeResource: "type of database like mssql, pg, mysql, etc...",
});
console.log(dictionary);
```

## Requisitos

- Node.js
- TypeScript
- Base de datos MSSQL

## Configuración de Variables de Entorno

Asegúrate de configurar las siguientes variables de entorno en un archivo .env en la raíz de tu proyecto:

- DB_HOST=tu_host_de_base_de_datos
- DB_USER=tu_usuario_de_base_de_datos
- DB_PASSWORD=tu_contraseña_de_base_de_datos
- DB_PORT=tu_puerto_de_base_de_datos
- DB_DATABASE_NAME=tu_nombre_de_base_de_datos

## Contribuir

Las contribuciones son bienvenidas. Por favor, abre un issue o envía un pull request para mejoras y correcciones.

## Licencia

Este proyecto está licenciado bajo la Licencia MIT.
