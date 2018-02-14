'use strict';

import appData from '../paths';

class OMSLanguage {
    props = {
        name, // Name of language
        abbr, // Abbreviation of language (for files and functions)
        isCompleted, // Language is completed or not (for notification in program settings)
        data // Language content
    }

    // Basic constructor
    constructor(name, abbr, isCompleted, data) {
        this.name = name || "English";
        this.abbr = abbr || "en";
        this.isCompleted = isCompleted || false;
        this.data = data;
    }

    // Constructor-loader from language package file (%abbr%.json)
    constructor(abbr) {
        let langFolder = appData + "/langs/",
            langPath = langFolder + abbr + ".json";
    }
}