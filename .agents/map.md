# PoopPOS Web - Mapa de Pantallas

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

## Componentes UI
- Navbar fixed con glass-morphism
- Menú hamburguesa (mobile)
- Dark theme (#0f0f0f background)
- Paleta naranja personalizada (poop)
- Fade-in animations (Intersection Observer)
