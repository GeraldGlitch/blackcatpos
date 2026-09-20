# BlackCatPOS Web - Mapa de Pantallas

## Tipo
Single page scrollable (landing page)

## Flujo de navegación
```
Hero (#hero)
  ├── Características (#features)
  ├── Módulos (#modules)
  ├── Servicios (#services)
  ├── Tutorial (#tutorial)
  ├── Capturas (#screenshots)
  └── Descarga (#download)

Footer → terminos.html (Términos de Uso) + privacidad.html (Política de Privacidad)
```

## Secciones

### Hero
- Logo animado + efecto glow
- Título: "Control total para tu negocio"
- Stats: 9+ módulos, $0, sin límites
- Version card: muestra title y message desde `version.json` (fetch JS + fallback embebido para file://, donde CORS bloquea fetch). Fallback debe sincronizarse manualmente con version.json al actualizar versión
- Enlace al devlog (itch.io) debajo del mensaje de versión
- CTAs: Descargar, Ver características

### Features (6 cards)
1. **100% Gratis** - Sin cargos ocultos
2. **Base Local** - Tus datos seguros
3. **Multimoneda** - Dólar, euro, bolívar
4. **Ventas Rápidas** - Interfaz intuitiva
5. **Reportes Diarios** - Dashboard completo
6. **Control Acceso** - PIN por empleado

### Módulos (9 cards)
Ventas | Gastos | Inventario | Clientes | Proveedores | Empleados | Reportes | Cuentas | Configuración

### Servicios (3 cards)
1. **Implementación Completa** $200 - Instalación + importación datos + capacitación staff
2. **Capacitación Personal** $30 - Sesión entrenamiento equipo
3. **Importación en Lote** $10 - Migración datos Excel/CSV
4. **Carga Manual Datos** $60 - Captura manual sin inventario digital

### Tutorial
Video YouTube embebido

### Screenshots
- Dashboard principal (`main-dashboard.png`)
- Pantalla login (`login.png`)

### Download
CTA final → redirección a itch.io

### Términos de Uso (`terminos.html`)
- Página estática separada, mismo tema oscuro/paleta naranja
- Navbar mínima: logo + "Volver al inicio"
- 12 secciones: aceptación, descripción (gratis + DB local), licencia, garantías as-is, limitación responsabilidad, servicios pago opcionales, responsabilidad usuario (fiscal DGI + regulaciones negocio), datos personales, propiedad intelectual, modificaciones, ley aplicable (Nicaragua), contacto (email geraldglitch@gmail.com + itch.io)
- Fecha última actualización: Agosto 2026

### Política de Privacidad (`privacidad.html`)
- Página estática separada, mismo tema oscuro/paleta naranja
- Navbar mínima: logo + "Volver al inicio"
- 13 secciones: resumen (DB 100% local, sin servidores propios), qué datos recopila (solo los que el usuario registra + contacto al contratar servicios), cómo usa los datos, datos de Google (scope único `gmail.send`, no lee bandeja/contactos), Gmail para enviar reportes (manual + automáticos), almacenamiento local (SQLite, imágenes, exports, backups zip), Google Drive NO se usa para backups (solo local, cloud futura con consentimiento), tokens OAuth (refresh ofuscado XOR+base64 en DB local, access token efímero), no vende datos, desconectar Google (botón en Configuración → Google Services + revocación en Cuenta Google), eliminación de datos (borrado individual, reset seguro, desinstalación + correo para datos de contacto de servicios), cambios a la política, ley aplicable (Nicaragua) + contacto
- Fecha última actualización: Septiembre 2026

## Componentes UI
- Navbar fixed con glass-morphism
- Menú hamburguesa (mobile)
- Logo BlackCatPOS ampliado en navbar, hero y CTA de descarga
- Dark theme (#0f0f0f background)
- Paleta naranja personalizada de BlackCatPOS
- Fade-in animations (Intersection Observer)
