/**
 * @fileoverview metodos_array_zoo - Ejemplo práctico de métodos de array en JavaScript
 * @version 1.0.0
 * @license MIT
 */

// Fuente original: https://github.com/imcodingideas/map-filter-reduce-exercises/blob/master/zoo
// Modificado y mejorado para el proyecto metodos_array_zoo

/**
 * @typedef {Object} Animal
 * @property {string} id - ID único del animal
 * @property {string} name - Nombre de la especie
 * @property {number} popularity - Nivel de popularidad (1-5)
 * @property {('NE'|'NW'|'SE'|'SW')} location - Ubicación en el zoo
 * @property {Array<Resident>} residents - Lista de residentes
 */

/**
 * @typedef {Object} Resident
 * @property {string} name - Nombre del animal
 * @property {('male'|'female')} sex - Sexo del animal
 * @property {number} age - Edad del animal
 */

/**
 * @typedef {Object} Employee
 * @property {string} id - ID único del empleado
 * @property {string} firstName - Nombre
 * @property {string} lastName - Apellido
 * @property {Array<string>} managers - IDs de los managers
 * @property {Array<string>} responsibleFor - IDs de los animales a cargo
 */

const zoo = {
  animals: [
    { 
      id: '0938aa23-f153-4937-9f88-4858b24d6bce',
      name: 'lions',
      popularity: 4,
      location: 'NE',
      residents: [
        { 
          name: 'Zena',
          sex: 'female',
          age: 12
        },
        { 
          name: 'Maxwell',
          sex: 'male',
          age: 15
        },
        { 
          name: 'Faustino',
          sex: 'male',
          age: 7
        },
        { 
          name: 'Dee',
          sex: 'female',
          age: 14
        }
      ]
    },
    { 
      id: 'e8481c1d-42ea-4610-8e11-1752cfc05a46',
      name: 'tigers',
      popularity: 5,
      location: 'NW',
      residents: [
        { 
          name: 'Shu',
          sex: 'female',
          age: 19
        },
        { 
          name: 'Esther',
          sex: 'female',
          age: 17
        }
      ]
    },
    { 
      id: 'baa6e93a-f295-44e7-8f70-2bcdc6f6948d',
      name: 'bears',
      popularity: 5,
      location: 'NW',
      residents: [
        { 
          name: 'Hiram',
          sex: 'male',
          age: 4
        },
        { 
          name: 'Edwardo',
          sex: 'male',
          age: 4
        },
        { 
          name: 'Milan',
          sex: 'male',
          age: 4
        },
      ]
    },
    { 
      id: 'ef3778eb-2844-4c7c-b66c-f432073e1c6b',
      name: 'penguins',
      popularity: 4,
      location: 'SE',
      residents: [
        { 
          name: 'Joe',
          sex: 'male',
          age: 10
        },
        { 
          name: 'Tad',
          sex: 'male',
          age: 12
        },
        { 
          name: 'Keri',
          sex: 'female',
          age: 2
        },
        { 
          name: 'Nicholas',
          sex: 'male',
          age: 2
        },
      ]
    },
    { 
      id: '533bebf3-6bbe-41d8-9cdf-46f7d13b62ae',
      name: 'otters',
      popularity: 4,
      location: 'SE',
      residents: [
        { 
          name: 'Neville',
          sex: 'male',
          age: 9
        },
        { 
          name: 'Lloyd',
          sex: 'male',
          age: 8
        },
        { 
          name: 'Mercedes',
          sex: 'female',
          age: 9
        },
        { 
          name: 'Margherita',
          sex: 'female',
          age: 10
        },
      ]
    },
    { 
      id: '89be95b3-47e4-4c5b-b687-1fabf2afa274',
      name: 'frogs',
      popularity: 2,
      location: 'SW',
      residents: [
        { 
          name: 'Cathey',
          sex: 'female',
          age: 3
        },
        { 
          name: 'Annice',
          sex: 'female',
          age: 2
        }
      ]
    },
    { 
      id: '78460a91-f4da-4dea-a469-86fd2b8ccc84',
      name: 'snakes',
      popularity: 3,
      location: 'SW',
      residents: [
        { 
          name: 'Paulette',
          sex: 'female',
          age: 5
        },
        { 
          name: 'Bill',
          sex: 'male',
          age: 6
        }
      ]
    },
    { 
      id: 'bb2a76d8-5fe3-4d03-84b7-dba9cfc048b5',
      name: 'elephants',
      popularity: 5,
      location: 'NW',
      residents: [
        { 
          name: 'Ilana',
          sex: 'female',
          age: 11
        },
        { 
          name: 'Orval',
          sex: 'male',
          age: 15
        },
        { 
          name: 'Bea',
          sex: 'female',
          age: 12
        },
        { 
          name: 'Jefferson',
          sex: 'male',
          age: 4
        },
      ]
    },
    { 
      id: '01422318-ca2d-46b8-b66c-3e9e188244ed',
      name: 'giraffes',
      popularity: 4,
      location: 'NE',
      residents: [
        { 
          name: 'Gracia',
          sex: 'female',
          age: 11
        },
        { 
          name: 'Antone',
          sex: 'male',
          age: 9
        },
        { 
          name: 'Vicky',
          sex: 'female',
          age: 12
        },
        { 
          name: 'Clay',
          sex: 'male',
          age: 4
        },
        { 
          name: 'Arron',
          sex: 'male',
          age: 7
        },
        { 
          name: 'Bernard',
          sex: 'male',
          age: 6
        }
      ]
    }
  ],
  employees: [
    {
      id: 'c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1',
      firstName: 'Nigel',
      lastName: 'Nelson',
      managers: ['0e7b460e-acf4-4e17-bcb3-ee472265db83',
                 'fdb2543b-5662-46a7-badc-93d960fdc0a8'],
      responsibleFor: ['0938aa23-f153-4937-9f88-4858b24d6bce',
                       'e8481c1d-42ea-4610-8e11-1752cfc05a46']
    },
    {
      id: '0e7b460e-acf4-4e17-bcb3-ee472265db83',
      firstName: 'Burl',
      lastName: 'Bethea',
      managers: ['9e7d4524-363c-416a-8759-8aa7e50c0992'],
      responsibleFor: ['0938aa23-f153-4937-9f88-4858b24d6bce',
                       'e8481c1d-42ea-4610-8e11-1752cfc05a46',
                       'baa6e93a-f295-44e7-8f70-2bcdc6f6948d',
                       'ef3778eb-2844-4c7c-b66c-f432073e1c6b']
    },
    {
      id: 'fdb2543b-5662-46a7-badc-93d960fdc0a8',
      firstName: 'Ola',
      lastName: 'Orloff',
      managers: ['9e7d4524-363c-416a-8759-8aa7e50c0992'],
      responsibleFor: ['533bebf3-6bbe-41d8-9cdf-46f7d13b62ae',
                       '89be95b3-47e4-4c5b-b687-1fabf2afa274',
                       '78460a91-f4da-4dea-a469-86fd2b8ccc84',
                       'bb2a76d8-5fe3-4d03-84b7-dba9cfc048b5']
    },
    {
      id: '56d43ba3-a5a7-40f6-8dd7-cbb05082383f',
      firstName: 'Wilburn',
      lastName: 'Wishart',
      managers: ['0e7b460e-acf4-4e17-bcb3-ee472265db83',
                 'fdb2543b-5662-46a7-badc-93d960fdc0a8'],
      responsibleFor: ['78460a91-f4da-4dea-a469-86fd2b8ccc84',
                       'bb2a76d8-5fe3-4d03-84b7-dba9cfc048b5']
    },
    {
      id: '9e7d4524-363c-416a-8759-8aa7e50c0992',
      firstName: 'Stephanie',
      lastName: 'Strauss',
      managers: [],
      responsibleFor: ['01422318-ca2d-46b8-b66c-3e9e188244ed']
    },
    {
      id: '4b40a139-d4dc-4f09-822d-ec25e819a5ad',
      firstName: 'Sharonda',
      lastName: 'Spry',
      managers: ['0e7b460e-acf4-4e17-bcb3-ee472265db83',
                 'fdb2543b-5662-46a7-badc-93d960fdc0a8'],
      responsibleFor: ['533bebf3-6bbe-41d8-9cdf-46f7d13b62ae',
                       '89be95b3-47e4-4c5b-b687-1fabf2afa274']
    },
    {
      id: 'c1f50212-35a6-4ecd-8223-f835538526c2',
      firstName: 'Ardith',
      lastName: 'Azevado',
      managers: ['b0dc644a-5335-489b-8a2c-4e086c7819a2'],
      responsibleFor: ['e8481c1d-42ea-4610-8e11-1752cfc05a46',
                       'baa6e93a-f295-44e7-8f70-2bcdc6f6948d']
    },
    {
      id: 'b0dc644a-5335-489b-8a2c-4e086c7819a2',
      firstName: 'Emery',
      lastName: 'Elser',
      managers: ['9e7d4524-363c-416a-8759-8aa7e50c0992'],
      responsibleFor: ['bb2a76d8-5fe3-4d03-84b7-dba9cfc048b5',
                       'baa6e93a-f295-44e7-8f70-2bcdc6f6948d',
                       '0938aa23-f153-4937-9f88-4858b24d6bce']
    }
  ],
  hours: { 'Tuesday': { open: 8, close: 18 },
           'Wednesday': { open: 8, close: 18 },
           'Thursday': { open: 10, close: 20 },
           'Friday': { open: 10, close: 20 },
           'Saturday': { open: 8, close: 22 },
           'Sunday': { open: 8, close: 20 },
           'Monday': { open: 0, close: 0 } },
  prices: { 'Adult': 49.99,
            'Senior': 24.99,
            'Child': 20.99 }
};

/**
 * Cuenta el número total de animales en el zoológico
 * @returns {number} Total de animales
 */
const numeroAnimales = zoo.animals.reduce((acc, especie) => {
  if (!Array.isArray(especie.residents)) {
    throw new Error(`La especie ${especie.name} no tiene una lista válida de residentes`);
  }
  return acc + especie.residents.length;
}, 0);

/**
 * Busca un empleado por su ID
 * @param {string} id - ID del empleado
 * @returns {Employee} Información del empleado
 * @throws {Error} Si el ID no existe o es inválido
 */
function getEmployee(id) {
  if (!id || typeof id !== 'string') {
    throw new Error('ID de empleado inválido');
  }

  const employee = zoo.employees.find(emp => emp.id === id);
  
  if (!employee) {
    throw new Error(`No se encontró ningún empleado con el ID: ${id}`);
  }

  return employee;
}

/**
 * Busca un empleado por su ID (versión one-line)
 * @param {string} id - ID del empleado
 * @returns {Employee} Información del empleado
 * @throws {Error} Si el ID no existe
 */
const getEmployeeOneLine = id => zoo.employees.find(emp => emp.id === id) || 
  (() => { throw new Error(`No se encontró ningún empleado con el ID: ${id}`); })();

/**
 * Busca un empleado por su ID (versión Clean Code)
 * @param {string} id - ID del empleado
 * @returns {Employee} Información del empleado
 * @throws {Error} Si el ID es inválido o no existe
 */
function getEmployeeCleanCode(id) {
  validateEmployeeId(id);
  return findEmployeeById(id);
}

/**
 * Valida el ID de un empleado
 * @param {string} id - ID a validar
 * @throws {Error} Si el ID es inválido
 */
function validateEmployeeId(id) {
  if (!id || typeof id !== 'string') {
    throw new Error('ID de empleado inválido');
  }
}

/**
 * Busca un empleado por su ID
 * @param {string} id - ID del empleado
 * @returns {Employee} Información del empleado
 * @throws {Error} Si el empleado no existe
 */
function findEmployeeById(id) {
  const employee = zoo.employees.find(emp => emp.id === id);
  if (!employee) {
    throw new Error(`No se encontró ningún empleado con el ID: ${id}`);
  }
  return employee;
}

/**
 * Busca múltiples empleados por sus IDs
 * @param {Array<string>} ids - Array de IDs de empleados
 * @returns {Array<Employee>} Array de empleados encontrados
 * @throws {Error} Si algún ID es inválido o no existe
 */
function getEmployees(ids) {
  if (!Array.isArray(ids)) {
    throw new Error('Se esperaba un array de IDs');
  }

  return ids.map(id => {
    const employee = getEmployee(id);
    if (!employee) {
      throw new Error(`No se encontró ningún empleado con el ID: ${id}`);
    }
    return employee;
  });
}

/**
 * Obtiene un mapeo de empleados y los animales que cuidan
 * @returns {Object.<string, Array<string>>} Objeto con nombres de empleados como claves y arrays de especies como valores
 */
function employeeCoverage() {
  try {
    return zoo.employees.reduce((acc, employee) => {
      const fullName = `${employee.firstName} ${employee.lastName}`;
      const animals = employee.responsibleFor.map(animalId => {
        const animal = zoo.animals.find(a => a.id === animalId);
        if (!animal) {
          throw new Error(`Animal no encontrado con ID: ${animalId}`);
        }
        return animal.name;
      });
      acc[fullName] = animals;
      return acc;
    }, {});
  } catch (error) {
    console.error('Error al generar la cobertura de empleados:', error);
    throw error;
  }
}

/**
 * Obtiene los nombres de los managers de un empleado
 * @param {string} employeeId - ID del empleado
 * @returns {Array<string>} Array con los nombres completos de los managers
 * @throws {Error} Si el empleado o algún manager no existe
 */
function getManagers(employeeId) {
  const employee = getEmployee(employeeId);
  
  if (!Array.isArray(employee.managers)) {
    throw new Error(`Lista de managers inválida para el empleado: ${employeeId}`);
  }

  return employee.managers.map(managerId => {
    const manager = getEmployee(managerId);
    return `${manager.firstName} ${manager.lastName}`;
  });
}

/**
 * Obtiene los nombres de los managers de un empleado (versión one-line)
 * @param {string} employeeId - ID del empleado
 * @returns {Array<string>} Array con los nombres completos de los managers
 */
const getManagersOneLine = employeeId => getEmployees(getEmployee(employeeId).managers)
  .map(manager => `${manager.firstName} ${manager.lastName}`);

console.log(getManagers('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1'));
