class GradientPreview extends HTMLElement {
    /* Creates an HTML skeleton and defines the hierachy */
    constructor() {
        super();

        /* Creates shadow DOM */
        const shadow = this.attachShadow({ mode: 'open' });

        const styles = document.createElement('link');
        styles.setAttribute('rel', 'stylesheet');
        styles.setAttribute('href', './styles/gradient-preview.css');

        /* Creates all elements of the skeleton */
        const wrapper = document.createElement('span');
        const background = document.createElement('div');
        const content = document.createElement('div');
        const textContainer = document.createElement('section');
        const iconContainer = document.createElement('section');

        const title = document.createElement('h2');
        const preview = document.createElement('p');
        const trackerContainer = document.createElement('div');
        const trackerText = document.createElement('h3');
        const trackerIcon = document.createElement('img');
        const notesContainer = document.createElement('div');
        const notesText = document.createElement('h3');
        const notesIcon = document.createElement('img');
        const journalContainer = document.createElement('div');
        const journalText = document.createElement('h3');
        const journalIcon = document.createElement('img');

        wrapper.setAttribute('id', 'wrapper');
        content.setAttribute('id', 'content');
        background.setAttribute('id', 'background');
        preview.setAttribute('id', 'preview-text');
        iconContainer.setAttribute('id', 'icon-container');
        trackerContainer.setAttribute('class', 'icon-item');
        notesContainer.setAttribute('class', 'icon-item');
        journalContainer.setAttribute('class', 'icon-item');
        trackerIcon.setAttribute('src', './icons/sq-tracker-icon.png');
        notesIcon.setAttribute('src', './icons/sq-notes-icon.png');
        journalIcon.setAttribute('src', './icons/sq-journal-icon.png');      

        title.textContent = 'DAILY LOG 05/26/2022';
        preview.textContent = 'Information on how much the trip would cost would be helpful';
        trackerText.textContent = 'TRACKERS';
        notesText.textContent = 'NOTES';
        journalText.textContent = 'JOURNAL';

        shadow.appendChild(styles);
        shadow.appendChild(wrapper);
        wrapper.appendChild(background);
        wrapper.appendChild(content);
        content.appendChild(textContainer);
        content.appendChild(iconContainer);
        textContainer.appendChild(title);
        textContainer.appendChild(preview);
        iconContainer.appendChild(trackerContainer);
        iconContainer.appendChild(notesContainer);
        iconContainer.appendChild(journalContainer);
        trackerContainer.appendChild(trackerText);
        trackerContainer.appendChild(trackerIcon);
        notesContainer.appendChild(notesText);
        notesContainer.appendChild(notesIcon);
        journalContainer.appendChild(journalText);
        journalContainer.appendChild(journalIcon);

        window.addEventListener('DOMContentLoaded', () => {
            console.log('content width: ' + content.offsetWidth);
            console.log('content height: ' + content.offsetHeight);
            console.log('content top: ' + content.offsetTop);
            background.style.width = content.offsetWidth + 'px';
            background.style.height = content.offsetHeight + 'px';
            background.style.top = content.offsetTop + 'px';
            console.log('background width: ' + background.offsetWidth);
            console.log('background height: ' + background.offsetHeight);
        });
    }
}

customElements.define('gradient-preview', GradientPreview);

export default GradientPreview;