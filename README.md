Aquí tienes el archivo `README.md` completo en formato Markdown:

```markdown
# Numero A Letras

Convierte números a su representación en palabras en español.

## Instalación

Para instalar este paquete, usa npm:

```bash
npm install numero-a-letras
```

## Uso

Para usar este paquete, importa la función `numeroALetras` y pásale un número:

```javascript
const { numeroALetras } = require('numero-a-letras');

const numero = 123;
console.log(numeroALetras(numero)); // "CIENTO VEINTITRÉS"
```

## Ejemplos

### Conversión de Números Pequeños

```javascript
console.log(numeroALetras(7));  // "SIETE"
console.log(numeroALetras(15)); // "QUINCE"
```

### Conversión de Decenas y Centenas

```javascript
console.log(numeroALetras(42));   // "CUARENTA Y DOS"
console.log(numeroALetras(200));  // "DOSCIENTOS"
```

### Conversión de Miles

```javascript
console.log(numeroALetras(1234)); // "MIL DOSCIENTOS TREINTA Y CUATRO"
```

### Conversión de Millones

```javascript
console.log(numeroALetras(1000000)); // "UN MILLÓN"
console.log(numeroALetras(2500000)); // "DOS MILLONES QUINIENTOS MIL"
```

## Contribución

Si quieres contribuir a este proyecto, por favor, haz un fork del repositorio y envía un pull request con tus cambios.

## Licencia

Este proyecto está licenciado bajo la licencia MIT. Consulta el archivo [LICENSE](LICENSE) para más detalles.

## Contacto

Para cualquier duda o consulta, puedes contactarme a través de [tu correo electrónico] o visitar mi perfil de GitHub en [GitHub](https://github.com/tu-usuario).
```

Copia este contenido en tu archivo `README.md` en la raíz de tu proyecto. Este archivo proporciona una guía clara sobre cómo instalar, usar y contribuir a tu paquete `numero-a-letras`, además de información sobre la licencia y contacto.