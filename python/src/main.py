from conversor import convertir_todas, crear_matriz_resultados


def leer_numero_decimal() -> int:
    while True:
        entrada = input("Ingresa un número entero en base 10: ")

        try:
            numero = int(entrada)
        except ValueError:
            print("Debes ingresar un número entero.")
            continue

        if numero < 0:
            print("El número debe ser cero o positivo.")
            continue

        return numero


def mostrar_resultados(matriz: list[list[str]]) -> None:
    print("\nConversión de bases")
    print("-" * 24)

    for base, resultado in matriz:
        print(f"Base {base}: {resultado}")


def main() -> None:
    numero = leer_numero_decimal()
    conversiones = convertir_todas(numero)
    matriz_resultados = crear_matriz_resultados(conversiones)
    mostrar_resultados(matriz_resultados)


if __name__ == "__main__":
    main()
