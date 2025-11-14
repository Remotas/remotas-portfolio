# scripts/generate-avatar-svg.ps1
# Regenera public/avatar.svg embebiendo public/avatar.jpg como Base64

$projectRoot = "C:\Users\melqu\remotas-portfolio"
$publicDir   = Join-Path $projectRoot "public"
$jpgPath     = Join-Path $publicDir  "avatar.jpg"
$svgPath     = Join-Path $publicDir  "avatar.svg"

if (-not (Test-Path $jpgPath)) {
    Write-Error "No se encontró $jpgPath. Asegúrate de que exista avatar.jpg en /public."
    exit 1
}

# 1) Leer el JPG como bytes
$bytes = [System.IO.File]::ReadAllBytes($jpgPath)

# 2) Convertir a Base64
$b64 = [Convert]::ToBase64String($bytes)

# 3) Plantilla SVG (misma que la que tienes ahora)
$svg = @"
<?xml version="1.0" encoding="UTF-8"?>
<svg
  xmlns="http://www.w3.org/2000/svg"
  width="100%"
  height="100%"
  style="background:#000000"
>
  <g transform="translate(50%,50%)">
    <image
      href="data:image/jpeg;base64,$b64"
      width="585"
      height="896"
      x="-292.5"
      y="-448"
    />
  </g>
</svg>
"@

# 4) Guardar SVG
Set-Content -Path $svgPath -Value $svg -Encoding UTF8

Write-Host "✅ Generado $svgPath a partir de $jpgPath"
