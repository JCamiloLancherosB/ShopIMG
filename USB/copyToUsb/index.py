import os
import shutil

def copiar_directorio(origen, destino):
    # Lista los elementos del directorio origen
    elementos = os.listdir(origen)

    # Recorre todos los elementos
    for elemento in elementos:
        origen_ruta = os.path.join(origen, elemento)
        destino_ruta = os.path.join(destino, elemento)

        # Si es un directorio, copia recursivamente
        if os.path.isdir(origen_ruta):
            if not os.path.exists(destino_ruta):
                shutil.copytree(origen_ruta, destino_ruta)
            else:
                print(f"El directorio '{elemento}' ya existe en el destino.")
        # Si es un archivo, copia si no existe en destino
        else:
            if not os.path.exists(destino_ruta):
                shutil.copy2(origen_ruta, destino_ruta)
            else:
                print(f"El archivo '{elemento}' ya existe en el destino.")

# Rutas de origen y destino (modifícalas según sea necesario)
directorio_origen = 'E:/Hector Francisco'
directorio_destino = 'F:/'

# Copia el directorio al USB
copiar_directorio(directorio_origen, directorio_destino)

print("¡Copia completa!")
