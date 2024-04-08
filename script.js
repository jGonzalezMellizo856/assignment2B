

console.log('script loaded');

function getQueryParam(name){
    const url = new URLSearchParams(window.location.search);
    return url.get(name);
}

document.addEventListener('DOMContentLoaded', () => {

    const bvcID = getQueryParam('id');
    const fullName = getQueryParam('fullName');
    const address = getQueryParam('address');
    const status = getQueryParam('status');
    const fee = getQueryParam('fee');

    if(bvcID && fullName && address && status && fee){
        document.getElementById('bvcID').innerText = bvcID;
        document.getElementById('fullName').innerText = fullName;
        document.getElementById('address').innerText = address;
        document.getElementById('status').innerText = status;
        document.getElementById('fee').innerText = fee;

        document.getElementById('confirm').style.display = 'block';
    }
});



document.getElementById('register_form').addEventListener('submit'), async (event) => {
    e.preventDefault();
    console.log('form submitted');

    const formData = new FormData(event.target);
    const registData = object.fromEntries(formData);

    try{
        const response = await fetch('/api/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(registData)
        });

        if (response.ok){
            const confirmUrl = await response.text();
            console.log(confirmUrl);

            window.location.href = confirmUrl;
        }else {
            throw new Error('Error');
        }
    }catch(err){
        console.log('Error', error);
    }

}
