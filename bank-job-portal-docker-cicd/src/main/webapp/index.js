function applyJob(button) {
    button.innerText = "Applied ✅";
    button.style.backgroundColor = "gray";
    button.disabled = true;
}

function searchJobs() {
    let input = document.getElementById("searchInput").value.toLowerCase();
    let jobs = document.getElementsByClassName("job-card");

    for (let i = 0; i < jobs.length; i++) {
        let title = jobs[i].getElementsByTagName("h3")[0].innerText.toLowerCase();

        if (title.includes(input)) {
            jobs[i].style.display = "block";
        } else {
            jobs[i].style.display = "none";
        }
    }
}
