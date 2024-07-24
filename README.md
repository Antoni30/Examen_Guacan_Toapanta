# Proyecto de Aprendizaje Automático

Este proyecto contiene un dataset y un notebook (IPYNB) con varios algoritmos de aprendizaje automático. El objetivo es proporcionar ejemplos prácticos de cómo aplicar estos algoritmos a datos reales y crear un modelo el cual puede ser consumido por una Api.

## Contenido del Proyecto

1. `IPynb/`: Este directorio contiene el notebook Jupyter con los algoritmos de aprendizaje automático.
2. `Api/`: Contiene la Api.
3. `Frontend/`: Contiene formulario


# Flask JSON Key Value API

Esta es una API simple creada con Flask que recibe un JSON con caracterisiticas y devulve la predicion 

## Requisitos

- Python
- virtualenv 
-   ```sh
      pip install virtualenv
    ```

## Instalación 

1. Clona este repositorio:
    ```sh
    git clone https://github.com/Antoni30/Examen_Guacan_Toapanta.git
    cd Examen_Guacan_Toapanta
    cd Api
    ```

2. Crea y activa un entorno virtual:

    - En Windows:
        ```sh
        python -m venv venv
        venv\Scripts\activate
        ```

3. Instala las dependencias:
    ```sh
    pip install -r requirements.txt
    ```
4. Ejecutar:
    ```sh
    python run.py
    ```
## Configuración

Asegúrate de que la estructura de tu proyecto sea similar a la siguiente:


  ```sh
      my_flask_app/
      │
      ├── app/
      │ ├── init.py
      │ ├── routes.py
      | ├── model.py
      │
      ├──instance
      | ├──arbolModel.joblib
      ├── venv/
      │ └── (entorno virtual)
      │
      ├── .gitignore
      ├── config.py
      ├── requirements.txt
      └── run.py
  ```

## Recomendacion 
Actualizar el pip del entorno virtual

 ```sh
      python.exe -m pip install --upgrade pip
  ```
