namespace Octagon.Program
{
    // Class: S.T.A.L.K.E.R. plaform
    public class OMSPlatform
    {
        private string type;
        private const long sizeCOP = 4848742400;
        private const long sizeCOC = 8643072000;

        public string Type {
            get
            {
                return type;
            }
            set
            {
                if (value == "S.T.A.L.K.E.R.: Call of Chernobyl" || value == "coc")
                {
                    type = "coc";
                    Size = sizeCOC;
                }  else
                {
                    type = "cop";
                    Size = sizeCOP;
                }
            }
        }
        public string Version { get; set; }
        public string Dir { get; set; }
        public long Size { get; set; }

        public OMSPlatform()
        {
            Type = "cop";
            Version = "1.6.02";
            Dir = null;
            Size = sizeCOP;
        }

        public OMSPlatform(string type, string version, string dir)
        {
            Type = type;
            Version = version;
            Dir = dir;
        }

        public static void CheckPlatformes()
        {
            
        }
    }
}
