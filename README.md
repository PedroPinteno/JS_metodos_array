# 🦁 Métodos Array Zoo

Un proyecto en JS para demostrar el uso avanzado de métodos de array. Utilizando datos de un zoológico como ejemplo práctico.

## 📋 Contenido
- [Descripción](#descripción)
- [Funcionalidades](#funcionalidades)
- [Estructura de Datos](#estructura-de-datos)
- [Uso](#uso)
- [Métodos Implementados](#métodos-implementados)
- [Ejemplos](#ejemplos)
- [Mejores Prácticas](#mejores-prácticas)

## 🎯 Descripción
Este proyecto implementa diferentes métodos de array de JavaScript para manipular y analizar datos de un zoológico ficticio. Incluye operaciones como búsqueda de empleados, gestión de animales y relaciones entre cuidadores y especies.

## ⚡ Funcionalidades
- Conteo total de animales en el zoológico
- Búsqueda de empleados por ID
- Asignación de animales a cuidadores
- Gestión de managers y relaciones laborales
- Análisis de datos de animales y empleados

## 🏗️ Estructura de Datos

### Animales
```javascript
{
  id: string,
  name: string,
  popularity: number (1-5),
  location: string (NE|NW|SE|SW),
  residents: [
    {
      name: string,
      sex: string (male|female),
      age: number
    }
  ]
}
```

### Empleados
```javascript
{
  id: string,
  firstName: string,
  lastName: string,
  managers: string[],
  responsibleFor: string[]
}
```

## 🚀 Uso

```javascript
// Contar animales
const total = numeroAnimales();
console.log(total); // Muestra el total de animales

// Buscar empleado
const empleado = getEmployee('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1');
console.log(empleado); // Muestra información del empleado

// Ver cobertura de cuidadores
const cobertura = employeeCoverage();
console.log(cobertura); // Muestra qué animales cuida cada empleado
```

## 🛠️ Métodos Implementados

### numeroAnimales()
Cuenta el número total de animales en el zoológico.
- **Retorno**: `number`
- **Ejemplo**: `console.log(numeroAnimales()) // 20`

### getEmployee(id)
Busca un empleado por su ID.
- **Parámetros**: `id` (string)
- **Retorno**: `Object`
- **Lanza**: Error si el ID no existe
- **Ejemplo**: `getEmployee('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1')`

### getEmployees(ids)
Busca múltiples empleados por sus IDs.
- **Parámetros**: `ids` (string[])
- **Retorno**: `Object[]`
- **Ejemplo**: `getEmployees(['id1', 'id2'])`

### employeeCoverage()
Muestra qué animales cuida cada empleado.
- **Retorno**: `Object`
- **Ejemplo**: `employeeCoverage()`

### getManagers(employeeId)
Obtiene los nombres de los managers de un empleado.
- **Parámetros**: `employeeId` (string)
- **Retorno**: `string[]`
- **Ejemplo**: `getManagers('employee123')`

## 📝 Ejemplos

### Búsqueda de Empleado (3 Estilos)
```javascript
// Estilo básico
const empleado1 = getEmployee(id);

// One-liner
const empleado2 = getEmployeeOneLine(id);

// Clean Code
const empleado3 = getEmployeeCleanCode(id);
```

### Cobertura de Animales
```javascript
const cobertura = employeeCoverage();
// Resultado:
// {
//   "Nigel Nelson": ["lions", "tigers"],
//   "Burl Bethea": ["lions", "tigers", "bears", "penguins"],
//   ...
// }
```

## ✨ Mejores Prácticas
1. **Clean Code**
   - Nombres descriptivos
   - Funciones con responsabilidad única
   - Código autoexplicativo

2. **Manejo de Errores**
   - Validación de parámetros
   - Mensajes de error descriptivos
   - Manejo de casos edge

3. **Optimización**
   - Uso eficiente de métodos de array
   - Evitar iteraciones innecesarias
   - Reutilización de código

## 🤝 Contribuir
Las contribuciones son bienvenidas. Por favor, asegúrate de:
1. Mantener el estilo de código
2. Documentar nuevas funciones
3. Agregar manejo de errores
4. Actualizar el README según sea necesario

## 📄 Licencia
MIT - ver [LICENSE](LICENSE) para más detalles.

### Estructura de Archivos Modificados

```
metodos_array_zoo/
├── index.html      # Agregado botón de tema y script
├── style.css       # Nuevas variables y estilos de tema
└── README.md       # Documentación actualizada
```

## 💻 Uso

1. Clona el repositorio:
```bash
git clone https://github.com/PedroPinteno/metodos_array_zoo.git
cd metodos_array_zoo
```
