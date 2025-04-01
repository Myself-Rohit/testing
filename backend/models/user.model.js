import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    photo: {
      type: String,
      default:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJcAAACUCAMAAACp1UvlAAAAMFBMVEXk5ueutLepsLPZ3N7n6erg4uPKztC3vL++w8W7wMPHy83V2NqzubzP0tTc3+DCxskfOlAIAAADRklEQVR4nO2bwXKEIAxAEQMqCP7/3xbdrV23XSXRBKfDu7SHzvRNDBBDVKpSqVQqlUqlUqlUKpVK5V8AsP4Cu38oCUD0duqHRO+sV7dQAxVd12wYg1GF1UCFQevmDa17X1IMlH9XWunaYmYQh1+heglab8qYgf0s9aDMw+x3gvUMmSsgNh5ZLc9S2irmaCWxQTZiJstKPGKmOzZaxeQiBnv7wy8xKyUGAaGV8EJeEWWVkAkY5C3FH2S2MexTnIkCXgYbLpk1SQlXow2/F94qMXEHDFpCuFIJyx0w6Enx0oHZi5D1C9zntyc9xhQwXi1wVC/e2hW916/wrkgghislGKeWimQv1p0CqGmfvDjPSLBkr6bl9HJkLc1ZHRJ3e36vie7FeRL9x3ixet017++6T9x0X73rOXTm3L5pncP8bktNfM3cBibX0cz1PaLztYH7jfuu72lA2ynY32uJK5K9D0DLfOa3xwf4zBfp/RI6J/zZtYh1SDGpjjS27zsKNcqxLUPOymsrNmHuFSRv+xD3MAJb1wu5u6v0FWRm31D6ni+Rs1sUubDNuEcWu0p7BcL+s9RjLDQQYHbnFFyhOYXZrP2wYeim1PTEU0z5P+dgpnLTJj9qdhibp5xOP8fBlx4begBg2rAMWvWTDa25xZzVAmwobTMze8ToQ7Buxobg26hK2qV/nB7f9PeCHHvroxGfnEv/r7V9t6T5p+1L67F3kkN9oEzIf7vtbJRYnSmb7NBg6lWtO+e5o2Y8rT8xOsZRSDBupPbl0sHEdQTEgei0Bo3hHIB4XG4dB224+B0EDP1CYcuV46MAFrUCd9HTVQXQxyKLSrhE7HhMFcsVE7dgsF2SLM7mP7QMUs3pFzjSUFWe2Jm5BfJ0SQ4dOclQbRs8I1GMWYsqxq5F67uy5tY3HV6LbSVuwLahuPatd9AdH/L9J1YMVV8I5PwKRuvz5zfX4xBiFxc2+2S3989MbxDosjNM0qrJLnquLwQPyC0tpPaIb3RehtFncKhkXZuC6GJ8kHN+Z3+ydCEZpxGEAl45H2Vd9WaNIacQK5BeOSuyRHo1+vgVnPb9xlmOL3Vl6tR3DuvWVHmV4PgTttgW4UirUqlUKpWKUl/lWSnkmIvaNgAAAABJRU5ErkJggg==",
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);
export default User;
