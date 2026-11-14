const links = document.querySelectorAll("nav a");

links.forEach(link => {

    link.addEventListener("click", function(e){

        e.preventDefault();

        const target = document.querySelector(
            this.getAttribute("href")
        );

        target.scrollIntoView({
            behavior: "smooth"
        });

    });

});

console.log(
    "Abdul Career Writer Portfolio Loaded"
);
const resumeModal = document.getElementById("resumeModal");
const openResumeModal = document.getElementById("openResumeModal");
const closeResumeModal = document.getElementById("closeResumeModal");

openResumeModal.addEventListener("click", () => {
    resumeModal.classList.add("active");
    document.body.classList.add("modal-open");
});

closeResumeModal.addEventListener("click", () => {
    resumeModal.classList.remove("active");
    document.body.classList.remove("modal-open");
});

resumeModal.addEventListener("click", (event) => {
    if (event.target === resumeModal) {
        resumeModal.classList.remove("active");
        document.body.classList.remove("modal-open");
    }
});

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        resumeModal.classList.remove("active");
        document.body.classList.remove("modal-open");
    }
});

const serviceSelect = document.getElementById("service");
const levelSelect = document.getElementById("level");
const currencySelect = document.getElementById("currency");
const budgetSelect = document.getElementById("budget");
const serviceDescription =
    document.getElementById("serviceDescription");

const pricing = {
    "ATS Resume Writing": {
        "Entry Level": [50, 100],
        "Mid-Level": [100, 200],
        "Senior Level": [250, 350],
        "Manager": [300, 400],
        "Director": [350, 450],
        "Executive": [400, 550]
    },

    "Executive Resume Writing": {
        "Senior Level": [300, 400],
        "Manager": [350, 450],
        "Director": [400, 550],
        "Executive": [450, 650]
    },

    "LinkedIn Optimization": {
        "Entry Level": [50, 100],
        "Mid-Level": [100, 175],
        "Senior Level": [150, 250],
        "Manager": [200, 300],
        "Director": [250, 350],
        "Executive": [300, 450]
    },

    "Resume + LinkedIn Package": {
        "Entry Level": [100, 175],
        "Mid-Level": [200, 300],
        "Senior Level": [350, 500],
        "Manager": [450, 600],
        "Director": [500, 700],
        "Executive": [600, 850]
    },

    "Reverse Recruiting": {
        "Entry Level": [200, 350],
        "Mid-Level": [300, 500],
        "Senior Level": [450, 700],
        "Manager": [600, 850],
        "Director": [800, 1200],
        "Executive": [1000, 1500]
    },

    "Career Positioning": {
        "Entry Level": [50, 100],
        "Mid-Level": [100, 200],
        "Senior Level": [200, 300],
        "Manager": [250, 350],
        "Director": [300, 450],
        "Executive": [400, 600]
    },

    "Executive Branding": {
        "Senior Level": [300, 450],
        "Manager": [400, 600],
        "Director": [500, 750],
        "Executive": [600, 1200]
    },

    "Cover Letter": {
        "Entry Level": [40, 70],
        "Mid-Level": [50, 80],
        "Senior Level": [60, 100],
        "Manager": [75, 120],
        "Director": [90, 150],
        "Executive": [100, 175]
    },

    "Other Career Writing": {
        "Entry Level": [50, 100],
        "Mid-Level": [75, 150],
        "Senior Level": [100, 200],
        "Manager": [150, 250],
        "Director": [200, 300],
        "Executive": [250, 400]
    },

"Standard Resume Package": {
    "Entry Level": [120, 150],
    "Mid-Level": [150, 200],
    "Senior Level": [300, 400],
    "Manager": [350, 450],
    "Director": [400, 500],
    "Executive": [450, 600]
},

"Premium Career Package": {
    "Entry Level": [220, 300],
    "Mid-Level": [300, 400],
    "Senior Level": [450, 600],
    "Manager": [550, 700],
    "Director": [650, 850],
    "Executive": [750, 1000]
},

"Full Executive Brand Package": {
    "Director": [900, 1200],
    "Executive": [900, 1200]
},

"Elite C-Suite Branding Package": {
    "Executive": [1200, 1800]
}
};

const serviceDescriptions = {
    "ATS Resume Writing":
        "ATS-optimized resume highlighting skills, achievements, and career value.",

    "Executive Resume Writing":
        "Executive resume focused on leadership, impact, and strategic achievements.",

    "LinkedIn Optimization":
        "LinkedIn optimization improving positioning, keywords, visibility, and professional branding.",

    "Resume + LinkedIn Package":
        "Complete resume and LinkedIn transformation for stronger career positioning.",

    "Reverse Recruiting":
        "Strategic job-search support targeting suitable opportunities and potential employers.",

    "Career Positioning":
        "Career positioning focused on professional direction, value, and market alignment.",

    "Executive Branding":
        "Executive branding strengthening leadership positioning, credibility, and professional influence.",

    "Cover Letter":
        "Targeted cover letter communicating qualifications, motivation, and professional value.",

    "Other Career Writing":
        "Customized career documents based on your specific professional requirements.",

    "Standard Resume Package":
        "ATS resume and persuasive cover letter for stronger applications.",

    "Premium Career Package":
        "Resume, cover letter, and LinkedIn optimization combined.",

    "Full Executive Brand Package":
        "Executive resume, LinkedIn branding, bio, narrative, and value proposition.",

    "Elite C-Suite Branding Package":
        "Complete C-suite branding for senior executives and board-level leaders."
};

const currencies = {
    USD: {
        symbol: "$",
        rate: 1,
        rounding: 25
    },

    GBP: {
        symbol: "£",
        rate: 0.85,
        rounding: 25
    },

    EUR: {
        symbol: "€",
        rate: 0.95,
        rounding: 25
    },

    CAD: {
        symbol: "C$",
        rate: 1.45,
        rounding: 25
    },

    AUD: {
        symbol: "A$",
        rate: 1.55,
        rounding: 25
    },

    NGN: {
        symbol: "₦",
        rate: 1500,
        rounding: 5000
    },

    AED: {
        symbol: "AED ",
        rate: 4,
        rounding: 50
    },

    SAR: {
        symbol: "SAR ",
        rate: 4,
        rounding: 50
    },

    QAR: {
        symbol: "QAR ",
        rate: 4,
        rounding: 50
    },

    KWD: {
        symbol: "KWD ",
        rate: 0.35,
        rounding: 5
    },

    BHD: {
        symbol: "BHD ",
        rate: 0.40,
        rounding: 5
    },

    OMR: {
        symbol: "OMR ",
        rate: 0.40,
        rounding: 5
    }
};

function roundPrice(amount, currency) {
    const rounding = currencies[currency].rounding;

    return Math.ceil(amount / rounding) * rounding;
}

function formatPrice(amount, currency) {
    const settings = currencies[currency];

    const rounded = roundPrice(amount, currency);

    return settings.symbol + rounded.toLocaleString();
}

function resetBudget(message = "Select service, level and currency first") {
    budgetSelect.innerHTML = "";

    const option = document.createElement("option");

    option.value = "";
    option.textContent = message;

    budgetSelect.appendChild(option);

    budgetSelect.disabled = true;
}

function updateBudgetRanges() {
    const service = serviceSelect.value;
    const level = levelSelect.value;
    const currency = currencySelect.value;

    if (!service || !level || !currency) {
        resetBudget();
        return;
    }

    const servicePricing = pricing[service];

    if (!servicePricing) {
        resetBudget("Pricing requires project review");
        return;
    }

    const selectedPricing = servicePricing[level];

    if (!selectedPricing) {
        resetBudget("Service unavailable for this career level");
        return;
    }

    const currencySettings = currencies[currency];

    if (!currencySettings) {
        resetBudget("Select a supported currency");
        return;
    }

    const minimumUSD = selectedPricing[0];
    const maximumUSD = selectedPricing[1];

    const minimum =
        minimumUSD * currencySettings.rate;

    const maximum =
        maximumUSD * currencySettings.rate;

    const middle =
        minimum + ((maximum - minimum) / 2);

    budgetSelect.innerHTML = "";
    budgetSelect.disabled = false;

    const defaultOption = document.createElement("option");

    defaultOption.value = "";
    defaultOption.textContent = "Select your budget";

    budgetSelect.appendChild(defaultOption);

    const lowerText =
        formatPrice(minimum, currency) +
        " - " +
        formatPrice(middle, currency);

    const upperText =
        formatPrice(middle, currency) +
        " - " +
        formatPrice(maximum, currency);

    const options = [
    lowerText,
    upperText,
    formatPrice(maximum, currency) + "+"
];

    options.forEach(function (text) {
        const option = document.createElement("option");

        option.value = text;
        option.textContent = text;

        budgetSelect.appendChild(option);
    });

    const discussOption = document.createElement("option");

    discussOption.value = "Prefer to discuss budget";
    discussOption.textContent = "Prefer to discuss budget";

    budgetSelect.appendChild(discussOption);
}

serviceSelect.addEventListener(
    "change",
    updateBudgetRanges
);

const servicesByLevel = {
    "Entry Level": [
        "ATS Resume Writing",
        "Standard Resume Package",
        "Premium Career Package",
        "LinkedIn Optimization",
        "Resume + LinkedIn Package",
        "Reverse Recruiting",
        "Career Positioning",
        "Cover Letter",
        "Other Career Writing"
    ],

    "Mid-Level": [
        "ATS Resume Writing",
        "Standard Resume Package",
        "Premium Career Package",
        "LinkedIn Optimization",
        "Resume + LinkedIn Package",
        "Reverse Recruiting",
        "Career Positioning",
        "Cover Letter",
        "Other Career Writing"
    ],

    "Senior Level": [
        "ATS Resume Writing",
        "Executive Resume Writing",
        "Standard Resume Package",
        "Premium Career Package",
        "LinkedIn Optimization",
        "Resume + LinkedIn Package",
        "Reverse Recruiting",
        "Career Positioning",
        "Executive Branding",
        "Cover Letter",
        "Other Career Writing"
    ],

    "Manager": [
        "ATS Resume Writing",
        "Executive Resume Writing",
        "Standard Resume Package",
        "Premium Career Package",
        "LinkedIn Optimization",
        "Resume + LinkedIn Package",
        "Reverse Recruiting",
        "Career Positioning",
        "Executive Branding",
        "Cover Letter",
        "Other Career Writing"
    ],

    "Director": [
        "ATS Resume Writing",
        "Executive Resume Writing",
        "Standard Resume Package",
        "Premium Career Package",
        "Full Executive Brand Package",
        "LinkedIn Optimization",
        "Resume + LinkedIn Package",
        "Reverse Recruiting",
        "Career Positioning",
        "Executive Branding",
        "Cover Letter",
        "Other Career Writing"
    ],

    "Executive": [
        "ATS Resume Writing",
        "Executive Resume Writing",
        "Standard Resume Package",
        "Premium Career Package",
        "Full Executive Brand Package",
        "Elite C-Suite Branding Package",
        "LinkedIn Optimization",
        "Resume + LinkedIn Package",
        "Reverse Recruiting",
        "Career Positioning",
        "Executive Branding",
        "Cover Letter",
        "Other Career Writing"
    ]
};

function updateServiceOptions() {
    const level = levelSelect.value;

    serviceSelect.innerHTML = "";

    const defaultOption = document.createElement("option");

    defaultOption.value = "";
    defaultOption.textContent = "Select a service";

    serviceSelect.appendChild(defaultOption);

    if (!level) {
        serviceSelect.disabled = true;
        resetBudget();
        return;
    }

    const availableServices = servicesByLevel[level];

    availableServices.forEach(function (service) {
        const option = document.createElement("option");

        option.value = service;
        option.textContent = service;

        serviceSelect.appendChild(option);
    });

    serviceSelect.disabled = false;

    resetBudget();
}

serviceSelect.addEventListener("change", function () {
    const selectedService = serviceSelect.value;

    if (!selectedService) {
        serviceDescription.textContent = "";
        return;
    }

    serviceDescription.textContent =
        serviceDescriptions[selectedService] || "";
});

levelSelect.addEventListener(
    "change",
    function () {
        updateServiceOptions();
        updateBudgetRanges();
        serviceDescription.textContent = "";
    }
);

currencySelect.addEventListener(
    "change",
    updateBudgetRanges
);

serviceSelect.disabled = true;

resetBudget();

const orderForm = document.getElementById("orderForm");

orderForm.addEventListener("submit", async function (event) {
    event.preventDefault();

    const formData = new FormData(orderForm);

    try {
        const response = await fetch(
            orderForm.action,
            {
                method: "POST",
                body: formData,
                headers: {
                    Accept: "application/json"
                }
            }
        );

        if (!response.ok) {
            throw new Error("Submission failed");
        }

        alert(
            "Thank you. Your enquiry was submitted successfully. We will review your details and contact you."
        );

        orderForm.reset();

        levelSelect.dispatchEvent(
            new Event("change")
        );

    } catch (error) {
        alert(
            "Submission failed. Please try again."
        );
    }
});