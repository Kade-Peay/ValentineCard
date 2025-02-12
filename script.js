document.addEventListener('DOMContentLoaded', function() {
    // create the GIF
    const gif = document.createElement('img');
    gif.src = 'media/Heart.gif';
    gif.style.display = 'block';
    gif.style.margin = '0 auto';
    document.body.appendChild(gif);

    // Create the text
    const text = document.createElement('p');
    text.textContent = "Hi Darling!";
    text.style.textAlign = 'center';
    document.body.appendChild(text);

    const text2 = document.createElement('p');
    text2.textContent = "I have a question for you...";
    text2.style.textAlign = 'center';
    document.body.appendChild(text2);

    // Create the button
    const button = document.createElement('button');
    button.textContent = "Click to Answer";
    button.style.display = 'block';
    button.style.margin = '20px auto';
    document.body.appendChild(button);

    // Add the event listener for the button 
    button.addEventListener('click', function() { 
        location.href = "page2.html"
    });
});