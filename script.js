document.getElementById('addButton').addEventListener('click', fetchData); 

    function fetchData() {
        const select = document.getElementById('select').value;
        const idNumber = document.getElementById('id').value;
        const resultDiv = document.getElementById('result');
        const errorDiv = document.getElementById('error');
        const loading = document.getElementById('loading');

        resultDiv.textContent = '';
        errorDiv.textContent = '';
        loading.style.display = 'block';

        if (idNumber < 1 || idNumber > 10) {
            loading.style.display = 'none';
            errorDiv.textContent = 'Ошибка: введите число от 1 до 10';
            return;
        }

        fetch(`https://swapi.py4e.com/api/${select}/${idNumber}`)
            .then(res => {
                if (!res.ok) {
                    return Promise.reject(`Ошибка: ${res.status} ${res.statusText}`);
                }
                return res.json();
            })
            .then(data => {
                loading.style.display = 'none';
                if (select === 'people') {
                    resultDiv.textContent = `Имя: ${data.name}`;
                } else if (select === 'films') {
                    resultDiv.textContent = `Название: ${data.title}`;
                } else if (select === 'planets') {
                    resultDiv.textContent = `Название: ${data.name}`;
                } else if (select === 'starships') {
                    resultDiv.textContent = `Название: ${data.name}`;
                }
            })
            .catch(error => {
                loading.style.display = 'none';
                errorDiv.textContent = error;
            })
            .finally(() => {
                loading.style.display = 'none';
            });
    }