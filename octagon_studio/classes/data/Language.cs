using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Newtonsoft.Json;
using System.IO;

namespace Octagon
{
    public class OMSLanguage
    {
        public string Name { get; set; }
        public string Abbr { get; set; }
        public bool IsCompleted { get; set; }
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

        public static OMSLanguage LoadLanguage(string abbr)
        {
            string langFolder = octagon_studio.App.appData + "/langs/";
            string langPath = langFolder + abbr + ".json";

            if (!File.Exists(langPath))
            {
                langPath = langFolder + "en.json";
            }

            dynamic language = JsonConvert.DeserializeObject(File.ReadAllText(langPath));
            OMSLanguage lang = new OMSLanguage(null, null, false, language);
            return lang;
        }
    }
}
