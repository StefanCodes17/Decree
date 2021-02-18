const menuItems = {
    subsections: [
        {
            subsection_id: '567586fsf9asd87',
            title: 'Homework',
            entries: [
                {
                    entry_id: 'entry_0000001',
                    entry_text: 'Social Studies',
                    dueDate: 'January 15 , 2020',
                    mainColor: 'red',
                    active: true
                },
                {
                    entry_id: 'entry_0000002',
                    entry_text: 'Engineering',
                    dueDate: 'January 16, 2020',
                    mainColor: 'pink',
                    active: false
                }
            ]
        },
        {
            subsection_id: '567586fsf9asd89',
            title: 'Quizzes',
            entries: [
                {
                    entry_id: 'entry_0000003',
                    entry_text: 'Math',
                    dueDate: 'January 15 , 2020',
                    mainColor: "blue",
                    active: true
                }
            ]
        }
    ]
}

function getMenu() {
    return menuItems;
}

function getSubsection(section_title) {
    return menuItems.subsections.find((sec) => sec.title.toLowerCase() === section_title.toLowerCase())
}

function addSubsection(section) {
    menuItems.subsections.push({
        title: section,
        entries: []
    })
}

function addEntryToSubsection([section_title, entry__title, entry__dueDate, color]) {
    let sectionRef = menuItems.subsections.find((sec) => sec.title.toLowerCase() === section_title.toLowerCase())
    sectionRef.entries.push(
        {
            entry_id: '',
            entry_text: entry__title,
            dueDate: entry__dueDate,
            mainColor: color
        })
    console.log(menuItems)
}

function getActiveEntries() {
    const activeEntries = menuItems.subsections.map(sub => {
        return {
            subsection: sub.title,
            activeEntries: sub.entries.filter(e => e.active)
        }
    })
    return activeEntries
}

export { menuItems, addSubsection, addEntryToSubsection, getMenu, getActiveEntries }