document.addEventListener('DOMContentLoaded', () => {
    const foxPicsUrl = 'https://randomfox.ca/floof/';

    const fetchFoxPics = async () => {
        try {
            const foxPics = await Promise.all([
                fetch(foxPicsUrl), fetch(foxPicsUrl), fetch(foxPicsUrl),
                fetch(foxPicsUrl), fetch(foxPicsUrl), fetch(foxPicsUrl),
                fetch(foxPicsUrl), fetch(foxPicsUrl), fetch(foxPicsUrl)
            ]);
            const foxData = await Promise.all(foxPics.map(response => response.json()));
            displayFoxPics(foxData);
        } catch (error) {
            console.error('Error fetching fox pictures:', error);
        }
    };

    const displayFoxPics = (foxPics) => {
        const apiData = document.getElementById('api-data');
        foxPics.forEach(foxPic => {
            const foxCol = document.createElement('div');
            foxCol.className = 'col-md-4';
            foxCol.innerHTML = `
                <div class="card mb-4">
                    <div class="card-body">
                        <h5 class="card-title">Fox Picture</h5>
                        <img src="${foxPic.image}" class="img-fluid" alt="Random Fox">
                    </div>
                </div>
            `;
            apiData.appendChild(foxCol);
        });
    };

    fetchFoxPics();
});
