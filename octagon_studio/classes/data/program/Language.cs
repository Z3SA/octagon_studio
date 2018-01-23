using System;
using Newtonsoft.Json;
using System.IO;

namespace Octagon.Program
{
    public class OMSLanguage
    {
        // Name of language (on that language)
        public string Name { get; set; }
        // Abbreviation of language (for files and other functions)
        public string Abbr { get; set; }
        // Language is completed or not (for notification in program settings)
        public bool IsCompleted { get; set; }
        // Language content
        public dynamic Data { get; set; }

        public OMSLanguage(string name, string abbr, bool isCompleted)
        {
            Name = name;
            Abbr = abbr;
            IsCompleted = isCompleted;
        }

        public OMSLanguage(string name, string abbr, bool isCompleted, dynamic data)
        {
            Name = name;
            Abbr = abbr;
            IsCompleted = isCompleted;
            Data = data;
        }

        // Constructor of object - loading from file by abbreviation
        public OMSLanguage(string abbr)
        {
            string langFolder = octagon_studio.App.appData + "/langs/";
            string langPath = langFolder + abbr + ".json";

            if (!File.Exists(langPath))
            {
                langPath = langFolder + "en.json";
            }

            Data = JsonConvert.DeserializeObject(File.ReadAllText(langPath));
            Name = Data.INFO.NAME;
            Abbr = Data.INFO.ABBR;
            IsCompleted = Convert.ToBoolean(Data.INFO.IS_COMPLETED);
        }
    }
}
