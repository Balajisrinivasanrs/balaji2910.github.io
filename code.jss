function showDetails(subjectId) {
    const details = {
        subject1: {
            syllabus: "Syllabus for Subject 1",
            author: "Author 1",
            link: "https://drive.google.com/drive/folders/1XHQkIHKfbYqm-ZuBWfTpgxSTTZBLjvck?usp=sharing/subject1"
        },
        subject2: {
            syllabus: "Syllabus for Subject 2",
            author: "Author 2",
            link: "https://drive.google.com/drive/folders/15yhYltw_CS4AQlJRH5ZMbFYJLAYaR8-m?usp=sharing/subject2"
        },
        subject3: {
            syllabus: "Syllabus for Subject 3",
            author: "Author 3",
            link: "https://example.com/subject3"
        },
        subject4: {
            syllabus: "Syllabus for Subject 4",
            author: "Author 4",
            link: "https://example.com/subject4"
        },
        subject5: {
            syllabus: "Syllabus for Subject 5",
            author: "Author 5",
            link: "https://example.com/subject5"
        },
        subject6: {
            syllabus: "Syllabus for Subject 6",
            author: "Author 6",
            link: "https://example.com/subject6"
        }
    };

    const subjectDetails = details[subjectId];
    if (subjectDetails) {
        const detailsDiv = document.getElementById('subject-details');
        detailsDiv.innerHTML = `
            <h2>${subjectDetails.syllabus}</h2>
            <p><strong>Author:</strong> ${subjectDetails.author}</p>
        `;
        detailsDiv.style.display = 'block';

        const linkBox = document.getElementById('link-box');
        linkBox.innerHTML = `Go to ${subjectId} resources`;
        linkBox.style.display = 'block';
        linkBox.onclick = function() {
            window.location.href = subjectDetails.link;
        };
    }
}
