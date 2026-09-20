# BlackCatPOS - Base de Datos (App Desktop)

## Nota
Este repo NO contiene la app desktop. `db.md` documenta lo que la landing page referencia sobre la DB del sistema POS.

## Motor
SQLite (local, sin servidor)

## Módulos que usan DB

| Módulo | Descripción |
|--------|-------------|
| Ventas | Registro ventas, items vendidos, totales |
| Gastos | Registro gastos operativos |
| Inventario | Productos, servicios, stock |
| Clientes | Datos clientes, historial compras |
| Proveedores | Datos proveedores |
| Empleados | Empleados, accesos, roles |
| Reportes | Reportes ventas, gastos, inventario |
| Cuentas | Cuentas financieras, balance |
| Configuración | Settings globales sistema |

## Reglas
- Imágenes no se guardan en DB, solo rutas en carpeta `images/`
- PIN-based login (empleados)
- Currency multi-moneda
