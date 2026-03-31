const education0Id = crypto.randomUUID();
const education1Id = crypto.randomUUID();
const work0Id = crypto.randomUUID();
const work1Id = crypto.randomUUID();

const initialCVdata = {
    firstName: "John",
    lastName: "Johnson",
    birthDate: "1913-01-01",
    address: "99 Moon street, Planet Moon",
    education: [
        {
            id: education0Id,
            location: "School on Moon",
            start: "2000-01-01",
            finish: "2004-01-01",
            description: "A very fun school where I learned how to moonwalk.",
        },
        {
            id: education1Id,
            location: "University of Moon",
            start: "2005-01-01",
            finish: "2009-01-01",
            description: "Bachelor's degree in moonwalking field.",
        },
    ],
    work: [
        {
            id: work0Id,
            location: "Moonwalk Engineering",
            start: "2009-01-01",
            finish: "2011-01-01",
            description:
                "I was an apprenticeship at the company, putting my moonwalking skills to practice and training to be more skillfull at it.",
        },
        {
            id: work1Id,
            location: "Moonwalk Enterprises",
            start: "2011-01-01",
            finish: "",
            description: "Currently work as a senior moonwalker.",
        },
    ],
};

export default initialCVdata;
