let mongoose = require("mongoose");
let Product = require("../models/productModel");


mongoose.connect("mongodb://localhost/highland", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true
});

let productSeed = [

  {
    name: "4-channel benchtop digital delay and pulse generator",
    model: "P500",
    category: "DDG",
    features: [
        "4 delay and width pulse outputs A B C D and T0 start reference", 
        "Up to 1000 seconds delay with 1 picosecond resolution",
        "35 nanosecond insertion delay",
        "Less than 15 picoseconds RMS typical jitter",
        "14 MHz rep rate",
        "Custom GaN output stages make clean, fast 50-ohm pulses from 0.5 to 25 volts p-p",
        "User-friendly operation: color LCD, spinner knob, onboard help",
        "No timing errors, aborted pulses, or missed triggers during timing changes",
        "Optional isolated rear-panel high-voltage outputs",
        "Trains/frames option includes timing lists and multiple pulses per trigger",
        "Interfaces are USB, RS-232, and Ethernet with SCPI and web page controls",
        "Web page controls from any browser",
    ],
    about: [
        "The P500 is a benchtop digital delay and pulse generator that generates four separately programmable delay-and-width outputs. The P500 can generate delays up to 1000 seconds in 1 picosecond increments, and is capable of a high repetition rate of 14 MHz. Applications for the P500 include laser timing, pulse picking, ICCD camera systems, ATE systems, and radar testing.",
        "P500 trigger sources include internal, external, remote, manual, or line. The low-jitter internal synthesized rate generator may be programmed from 0.001 Hz to 14 MHz in 1 mHz steps. The external trigger features selectable trigger level, slope, and termination impedance. Trigger gating and burst facilities are standard.",
        "The front panel includes a color LCD, numeric keypad, and spinner knob. Each function of the P500 has an intuitive single-level control menu invoked by an associated pushbutton. A HELP system explains each pushbutton, input, output, and setting.",
        "Remote interfaces include RS-232, USB, and Ethernet with both ASCII serial commands and web page controls.",
        "The standard P500 timebase is a precision temperature-compensated crystal oscillator. An optional OCXO is available for applications requiring extreme accuracy and lowest jitter. Multiple P500s may be synchronized to each other, or locked to an external 10 MHz reference.",
    ],
  },

  {
    name: "4-channel compact advanced digital delay and pulse train generator",
    model: "T564",
    category: "DDG",
    features: [
        "Four TTL-level delay outputs, individually programmable for delay and pulse width range up to 10 seconds with 10 picosecond resolution", 
        "Low 20 nanosecond insertion delay",
        "Scenario generation for changing delay programs automatically",
        "Pulse train generation creates unlimited number of pulses from a single trigger",
        "Queue command programs new timings without disturbing ongoing triggers",
        "DSP phaselock system maintains crystal-clock accuracy and jitter for any delay length; parts per trillion drift using external 10 MHz reference",
        "DDS synthesizer for internal trigger rates to 16 MHz",
        "Programmable-level trigger input with divide/burst features and trigger GATE input",
        "RS-232 serial interface standard; Ethernet optional",
        "OEM packaged or board-only custom versions available",
    ],
    about: [
        "The T560 series is a family of small digital delay generators, intended for use in embedded OEM applications.",
        "The T564 extends the capabilities of Highland's original T560 digital delay generator, allowing not only a single delay program, but a scenario of more than 8000 frames to be preloaded and then executed in rapid succession. Frames can be advanced automatically as triggers are received or simply stored and recalled manually. Each trigger generates four precise pulse outputs, independently programmable with 10 picosecond resolution in both delay and width. The T564 can generate single pulses per trigger as a standard digital delay generator or, new to the T560 DDG family, pulse trains. The Queue function allows new timing settings to be installed without disturbing ongoing cycles or missing triggers.",
        "With the same low 20 nanosecond insertion delay and 20 picosecond jitter as the T560, the T564 is ideal for timing and gating lasers, Q-switches, ICCDs, and other electro-optical devices, and for applying picosecond-resolution time trims to nuclear, radar, and sonar cabling and instrumentation. Additionally, the scenario capability allows moving target simulation in radar/sonar/lidar applications and sliding timing windows for margin testing - all with a form factor smaller than a paperback, with easy RS-232 or optional Ethernet control.",
        "Custom versions are readily available for OEM customers.",
    ],
  },

];

Product.deleteMany({})
  .then(() => Product.collection.insertMany(productSeed))
  .then(data => {
    console.log("Added product record(s)!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });