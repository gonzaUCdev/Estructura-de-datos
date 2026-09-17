# Conversor de bases numéricas

Proyecto para el ejercicio 9 de Estructuras de Datos.

El programa lee un número decimal no negativo y lo convierte a base 2, 8 y 16. Los residuos de cada división se guardan primero en un arreglo y luego se invierten para formar el resultado.

La solución está implementada en Python y TypeScript.

## Estructuras usadas

- `ConversionRegistro`: record/struct que guarda el número original, la base y el arreglo de dígitos.
- `Conversion`: clase que concentra la conversión a una base.
- Arreglo de conversiones: contiene los resultados para base 2, 8 y 16.
- Matriz de resultados: organiza cada salida como `[base, resultado]`.

## Ejecutar Python

Desde la raíz del proyecto:

```powershell
python python/src/main.py
```

## Ejecutar TypeScript

```powershell
cd typescript
npm install
npm run build
npm start
```

## Ejemplo

Para el número decimal `255`:

```text
Base 2: 11111111
Base 8: 377
Base 16: FF
```

## Repositorio público

No se necesitan claves, servicios externos ni archivos `.env`. Los archivos locales y secretos están contemplados en `.gitignore`.
