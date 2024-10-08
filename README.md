# MDocsDep

MDocsDep es un paquete de NPM desarrollado con Node.js y TypeScript, diseñado para gestionar y consultar información en una base de datos, generando un diccionario de datos como respuesta. Este paquete proporciona detalles como nombres de tablas, columnas, tipos de datos y propiedades clave, facilitando la documentación y comprensión de los esquemas de bases de datos para su análisis y mantenimiento.

## Características

- Gestión y consulta de información en bases de datos.
- Generación de diccionarios de datos.
- Detalles de nombres de tablas, columnas, tipos de datos y propiedades clave.
- Facilita la documentación y comprensión de esquemas de bases de datos.
- Integración con Azure Key Vault para la gestión de secretos.

## Instalación

```bash
npm install mdocsdep
```

## Uso

```typescript
import { MDocsDep } from "mdocsdep";

// Ejemplo de uso
const mdocs = new MDocsDep();
const diccionario = mdocs.generateDictionary({
  db: "nombre_de_la_base_de_datos",
  data: "some data",
  keyValue: "some key value",
  secretName: "some secret name",
});
console.log(diccionario);
```

## Requisitos

- Node.js
- TypeScript
- Una cuenta de Azure con acceso a Azure Key Vault

## Contribuir

Las contribuciones son bienvenidas. Por favor, abre un issue o envía un pull request para mejoras y correcciones.

## Licencia

Este proyecto está licenciado bajo la Licencia MIT.
