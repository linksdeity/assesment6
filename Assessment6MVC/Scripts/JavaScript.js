function Going() {
    if (document.getElementById('GoingBox').checked) {
        document.getElementById('DatePicker').classList.remove('hidden')
        document.getElementById('NotGoing').classList.add('hidden')
    } else {
        document.getElementById('DatePicker').classList.add('hidden')
        document.getElementById('NotGoing').classList.remove('hidden')
    }
}