// ===============================
// pH CALCULATOR
// ===============================

function calculatePH() {

    let h = parseFloat(document.getElementById("hplus").value);

    if (isNaN(h) || h <= 0) {
        document.getElementById("phResult").innerHTML =
            "⚠️ Please enter a valid H⁺ concentration.";
        return;
    }

    let ph = -Math.log10(h);

    document.getElementById("phResult").innerHTML =
        "✅ pH = " + ph.toFixed(3);
}


// ===============================
// MOLARITY CALCULATOR
// Formula: M = Moles / Volume
// ===============================

function calculateMolarity() {

    let moles = parseFloat(document.getElementById("moles").value);
    let volume = parseFloat(document.getElementById("volume").value);

    if (isNaN(moles) || isNaN(volume) || volume <= 0) {
        document.getElementById("molarityResult").innerHTML =
            "⚠️ Please enter valid values.";
        return;
    }

    let molarity = moles / volume;

    document.getElementById("molarityResult").innerHTML =
        "✅ Molarity = " + molarity.toFixed(4) + " M";
}


// ===============================
// NORMALITY CALCULATOR
// Formula: N = Weight / (Eq. Weight × Volume)
// ===============================

function calculateNormality() {

    let grams = parseFloat(document.getElementById("grams").value);
    let eqWeight = parseFloat(document.getElementById("eqWeight").value);
    let volume = parseFloat(document.getElementById("normalVolume").value);

    if (
        isNaN(grams) ||
        isNaN(eqWeight) ||
        isNaN(volume) ||
        eqWeight <= 0 ||
        volume <= 0
    ) {
        document.getElementById("normalityResult").innerHTML =
            "⚠️ Please enter valid values.";
        return;
    }

    let normality = grams / (eqWeight * volume);

    document.getElementById("normalityResult").innerHTML =
        "✅ Normality = " + normality.toFixed(4) + " N";
}


// ===============================
// PPM CALCULATOR
// ===============================

function calculatePPM() {

    let mass = parseFloat(document.getElementById("ppmMass").value);
    let volume = parseFloat(document.getElementById("ppmVolume").value);

    if (
        isNaN(mass) ||
        isNaN(volume) ||
        volume <= 0
    ) {
        document.getElementById("ppmResult").innerHTML =
            "⚠️ Please enter valid values.";
        return;
    }

    let ppm = (mass / volume) * 1000000;

    document.getElementById("ppmResult").innerHTML =
        "✅ PPM = " + ppm.toFixed(2);
}


// ===============================
// ANGLE OF REPOSE
// Formula: θ = tan⁻¹(h/r)
// ===============================

function calculateAngle() {

    let height = parseFloat(document.getElementById("height").value);
    let radius = parseFloat(document.getElementById("radius").value);

    if (
        isNaN(height) ||
        isNaN(radius) ||
        height < 0 ||
        radius <= 0
    ) {
        document.getElementById("angleResult").innerHTML =
            "⚠️ Please enter valid values.";
        return;
    }

    let angle =
        Math.atan(height / radius) * (180 / Math.PI);

    document.getElementById("angleResult").innerHTML =
        "✅ Angle of Repose = " + angle.toFixed(2) + "°";
}


// ===============================
// DOSE CALCULATOR
// Formula: Required = (Desired / Available) × Quantity
// ===============================

function calculateDose() {

    let desired = parseFloat(
        document.getElementById("desiredDose").value
    );

    let available = parseFloat(
        document.getElementById("availableDose").value
    );

    let quantity = parseFloat(
        document.getElementById("quantity").value
    );

    if (
        isNaN(desired) ||
        isNaN(available) ||
        isNaN(quantity) ||
        available <= 0 ||
        quantity <= 0
    ) {
        document.getElementById("doseResult").innerHTML =
            "⚠️ Please enter valid values.";
        return;
    }

    let required =
        (desired / available) * quantity;

    document.getElementById("doseResult").innerHTML =
        "✅ Required Quantity = " + required.toFixed(2);
}


// ===============================
// PERCENTAGE STRENGTH
// Formula: % = Amount / Volume × 100
// ===============================

function calculateStrength() {

    let amount = parseFloat(
        document.getElementById("strengthAmount").value
    );

    let volume = parseFloat(
        document.getElementById("strengthVolume").value
    );

    if (
        isNaN(amount) ||
        isNaN(volume) ||
        volume <= 0
    ) {
        document.getElementById("strengthResult").innerHTML =
            "⚠️ Please enter valid values.";
        return;
    }

    let strength =
        (amount / volume) * 100;

    document.getElementById("strengthResult").innerHTML =
        "✅ Percentage Strength = " +
        strength.toFixed(2) + "%";
}


// ===============================
// COMPOUND INFORMATION
// ===============================

function showCompound() {

    let compound =
        document.getElementById("compound").value;

    let result =
        document.getElementById("compoundResult");


    const compounds = {

        paracetamol: {
            name: "Paracetamol",
            formula: "C₈H₉NO₂",
            molecular: "151.16 g/mol",
            state: "Solid",
            appearance: "White crystalline powder",
            melting: "169–170 °C",
            boiling: "Decomposes"
        },

        aspirin: {
            name: "Aspirin",
            formula: "C₉H₈O₄",
            molecular: "180.16 g/mol",
            state: "Solid",
            appearance: "White crystalline powder",
            melting: "136 °C",
            boiling: "Decomposes"
        },

        ibuprofen: {
            name: "Ibuprofen",
            formula: "C₁₃H₁₈O₂",
            molecular: "206.28 g/mol",
            state: "Solid",
            appearance: "White crystalline powder",
            melting: "75–78 °C",
            boiling: "Decomposes"
        },

        caffeine: {
            name: "Caffeine",
            formula: "C₈H₁₀N₄O₂",
            molecular: "194.19 g/mol",
            state: "Solid",
            appearance: "White crystalline powder",
            melting: "235–238 °C",
            boiling: "Decomposes"
        },

        acetone: {
            name: "Acetone",
            formula: "C₃H₆O",
            molecular: "58.08 g/mol",
            state: "Liquid",
            appearance: "Colorless liquid",
            melting: "−95 °C",
            boiling: "56 °C"
        },

        ethanol: {
            name: "Ethanol",
            formula: "C₂H₆O",
            molecular: "46.07 g/mol",
            state: "Liquid",
            appearance: "Colorless liquid",
            melting: "−114 °C",
            boiling: "78 °C"
        },

        methanol: {
            name: "Methanol",
            formula: "CH₄O",
            molecular: "32.04 g/mol",
            state: "Liquid",
            appearance: "Colorless liquid",
            melting: "−98 °C",
            boiling: "65 °C"
        },

        water: {
            name: "Water",
            formula: "H₂O",
            molecular: "18.015 g/mol",
            state: "Liquid",
            appearance: "Colorless liquid",
            melting: "0 °C",
            boiling: "100 °C"
        }
    };


    if (compound === "") {

        result.innerHTML = "";

        return;
    }


    let c = compounds[compound];


    result.innerHTML = `
        <strong>Name:</strong> ${c.name}<br>
        <strong>Molecular Formula:</strong> ${c.formula}<br>
        <strong>Molecular Weight:</strong> ${c.molecular}<br>
        <strong>State:</strong> ${c.state}<br>
        <strong>Appearance:</strong> ${c.appearance}<br>
        <strong>Melting Point:</strong> ${c.melting}<br>
        <strong>Boiling Point:</strong> ${c.boiling}
    `;
}
