# spa-jamstack-vite-netlify

JavaScript moderno con arquitectura Jamstack, Vite para desarrollo y bundling, CI (GitHub Actions) y CD (Netlify).

## Tabla de Contenidos

- [Descripción del Proyecto](#descripción-del-proyecto)
- [Características](#características)
- [Tecnologías Utilizadas](#tecnologías-utilizadas)
- [Instalación](#instalación)
- [Uso](#uso)
- [Contribuciones](#contribuciones)
- [Licencia](#licencia)

## Descripción del Proyecto

Este proyecto es una SPA moderna utilizando Vite y la arquitectura Jamstack, que permite un desarrollo ágil y optimizado con integración continua y despliegue continuo.

## Características Clave para una Landing Page(SPA)

1. Encabezado llamativo: Incluye el nombre del producto o servicio con un mensaje claro y persuasivo. 
2. Formulario de Captura de Leads: Un formulario de contacto o suscripción que permita captar datos de los visitantes.
3. Beneficios o Características del Producto: Detalle de las ventajas que ofrece el producto o servicio.
4. Testimonios de Clientes: Sección con reseñas o testimonios que generen confianza.
5. Llamada a la Acción (CTA): Botones visibles que inviten a realizar una acción, como “Contáctanos” o “Más información”.
6. Imágenes o Videos de Alta Calidad: Elementos visuales que complementen el mensaje de la página.
7. Compatibilidad Móvil: Responsividad en todos los dispositivos.
8. Optimización SEO: Estructura de encabezados y texto amigable para buscadores.
9. Velocidad de Carga Rápida: Uso optimizado de archivos y scripts para asegurar tiempos de carga mínimos.

## Tecnologías Utilizadas

**DEV**
- Framework VanilaJs (JavaScript, SCSS y HTML5) 
- Typescript ("type guards" y DX) 
- Vite ()
**OPS**
- GitHub Actions (Integracion Continua)
- Netlify(Hosting y Despliegue continuo)

## Instalación

1. Clona el repositorio:
   ```bash
   git clone https://github.com/tu-usuario/spa-jamstack-vite-netlify.git
   ```
   
2. Navega al directorio del proyecto:
   ```bash
   cd spa-jamstack-vite-netlify
   ```

3. Instala las dependencias:
   ```bash
   npm install
   ```

## Uso

Para iniciar el servidor de desarrollo, ejecuta:

```bash
npm run dev
```

Abre tu navegador y visita `http://localhost:3000` para ver tu aplicación en acción.

## Contribuciones

¡Las contribuciones son bienvenidas! Para contribuir a este proyecto, sigue estos pasos:

1. **Crea una nueva rama para tu característica o arreglo**:
   ```bash
   git checkout -b feature/nueva-característica
   ```

2. **Haz tus cambios y agrega un mensaje de confirmación claro**:
   ```bash
   git add .
   git commit -m "Añadir nueva característica: descripción breve"
   ```

3. **Sube tu rama a GitHub**:
   ```bash
   git push origin feature/nueva-característica
   ```

4. **Crea un Pull Request**:
   - Ve a la página del repositorio en GitHub.
   - Haz clic en "Compare & pull request".
   - Proporciona un título y una descripción clara para tu Pull Request.
   - Haz clic en "Create pull request".

5. **Espera la revisión**:
   - Pide a tus compañeros que revisen tu código. Realiza ajustes si es necesario.

6. **Merge del Pull Request**:
   - Una vez aprobado, mergea tu Pull Request en la rama principal.

## Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo [LICENSE](LICENSE) para más detalles.


## FUTURE TOOLS
- ACT WITH DOCKER.
- Tests with playwrite



<!-- fireship 
How GitHub Actions 10x my productivity

tests with playwrite

The ONLY Sales Page You Need To Make $10k/month

CD with netlify
- netlify login
- netlify init
- 

Preview Deploy:
netlify deploy

Production  Deploy:
netlify deploy --prod

// variables
netlify env:set VITE_API_URL "https://api.example.com"

 -->
